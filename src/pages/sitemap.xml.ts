import type { APIRoute } from "astro";
import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { getPostList, type ShortPostData } from "@/lib/posts";
import config from "site.config";

const HREF_LANG_MAP: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en-US",
};

interface SitemapItem {
  path: string;
  lastmod: string;
  alternates?: Partial<Record<Locale, string>>;
}

function formatLastMod(date: Date): string {
  return date.toISOString();
}

function resolveTranslationKey(post: ShortPostData): string {
  return post.translationKey || post.slug;
}

function toAbsoluteUrl(siteUrl: string, path: string): string {
  const isPost = path.includes("/post/");
  return isPost ? `${siteUrl}${path}/` : `${siteUrl}${path}`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export const GET: APIRoute = async () => {
  const siteUrl = config.siteUrl.replace(/\/$/, "");
  const allPosts = await getPostList(true, "all");

  const latestDate = allPosts[0]?.updatedAt || allPosts[0]?.date || new Date();

  const items: SitemapItem[] = ["/", "/about"].flatMap((path) => {
    const alternates = {
      zh: localizePath(path, "zh"),
      en: localizePath(path, "en"),
    };
    return (["zh", "en"] as const).map((locale) => ({
      path: localizePath(path, locale),
      lastmod: formatLastMod(latestDate),
      alternates,
    }));
  });

  const groupedPosts = new Map<string, ShortPostData[]>();
  allPosts.forEach((post) => {
    const key = resolveTranslationKey(post);
    if (!groupedPosts.has(key)) {
      groupedPosts.set(key, []);
    }
    groupedPosts.get(key)!.push(post);
  });

  groupedPosts.forEach((grouped) => {
    const alternates: Partial<Record<Locale, string>> = {};
    grouped.forEach((post) => {
      alternates[post.locale] = localizePath(`/post/${post.slug}`, post.locale);
    });

    grouped.forEach((post) => {
      items.push({
        path: localizePath(`/post/${post.slug}`, post.locale),
        lastmod: formatLastMod(post.updatedAt || post.date),
        alternates,
      });
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${items
      .map((item) => {
        const alternates = item.alternates
          ? Object.entries(item.alternates)
            .filter((entry): entry is [Locale, string] => {
              const [locale, path] = entry;
              return (locale === "zh" || locale === "en") && Boolean(path);
            })
            .map(([locale, path]) => {
              return `    <xhtml:link rel="alternate" hreflang="${HREF_LANG_MAP[locale]}" href="${escapeXml(
                toAbsoluteUrl(siteUrl, path)
              )}" />`;
            })
            .join("\n")
          : "";

        const xDefaultPath = item.alternates?.[DEFAULT_LOCALE];
        const xDefault = xDefaultPath
          ? `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(
            toAbsoluteUrl(siteUrl, xDefaultPath)
          )}" />`
          : "";

        return `  <url>
    <loc>${escapeXml(toAbsoluteUrl(siteUrl, item.path))}</loc>
    <lastmod>${item.lastmod}</lastmod>
${alternates}${xDefault}
  </url>`;
      })
      .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
