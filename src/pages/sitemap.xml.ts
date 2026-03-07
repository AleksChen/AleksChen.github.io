import type { APIRoute } from "astro";
import { getPostList } from "@/lib/posts";
import config from "site.config";

function formatLastMod(date: Date): string {
  return date.toISOString();
}

export const GET: APIRoute = async () => {
  const siteUrl = config.siteUrl.replace(/\/$/, "");
  const posts = await getPostList(true);

  const latestPostDate =
    posts[0]?.updatedAt || posts[0]?.date || new Date();

  const urls = [
    {
      loc: `${siteUrl}/`,
      lastmod: formatLastMod(latestPostDate),
    },
    ...posts.map((post) => ({
      loc: `${siteUrl}/post/${post.slug}`,
      lastmod: formatLastMod(post.updatedAt || post.date),
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
