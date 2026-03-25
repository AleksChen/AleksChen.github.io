import type { APIRoute } from "astro";
import { localizePath } from "@/i18n/paths";
import { getPostList } from "@/lib/posts";
import config from "site.config";

export const GET: APIRoute = async () => {
  const locale = "en" as const;
  const posts = await getPostList(true, locale);
  const siteUrl = config.siteUrl;
  const description =
    "A technical blog about frontend engineering, AI coding workflows, and cross-platform development.";

  const rssItems = posts
    .slice(0, 20)
    .map((post) => {
      const postUrl = `${siteUrl}${localizePath(`/post/${post.slug}`, locale)}`;
      const pubDate = new Date(post.date).toUTCString();

      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.intro || ""}]]></description>
      <pubDate>${pubDate}</pubDate>
      ${post.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join("\n      ")}
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title><![CDATA[${config.head.title}]]></title>
    <description><![CDATA[${description}]]></description>
    <link>${siteUrl}/en</link>
    <atom:link href="${siteUrl}/en/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Astro</generator>
${rssItems}
  </channel>
</rss>`.trim();

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
