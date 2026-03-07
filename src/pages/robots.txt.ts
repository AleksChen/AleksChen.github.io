import type { APIRoute } from "astro";
import config from "site.config";

export const GET: APIRoute = () => {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${config.siteUrl}/sitemap.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
