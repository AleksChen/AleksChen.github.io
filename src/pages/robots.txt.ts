import type { APIRoute } from "astro";
import config from "site.config";

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${config.siteUrl}/sitemap-index.xml
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};

