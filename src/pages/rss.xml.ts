import type { APIRoute } from "astro";
import { getPostList } from "@/lib/posts";
import config from "site.config";

export const GET: APIRoute = async () => {
  const posts = await getPostList(true);
  const siteUrl = config.siteUrl;

  const rssItems = posts
    .slice(0, 20) // 只包含最新 20 篇
    .map((post) => {
      const postUrl = `${siteUrl}/post/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      const updatedDate = post.updatedAt
        ? new Date(post.updatedAt).toUTCString()
        : pubDate;

      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.intro || ""}]]></description>
      <pubDate>${pubDate}</pubDate>
      <updated>${updatedDate}</updated>
      ${post.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join("\n      ")}
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title><![CDATA[${config.head.title}]]></title>
    <description><![CDATA[${config.head.description}]]></description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>zh-CN</language>
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

