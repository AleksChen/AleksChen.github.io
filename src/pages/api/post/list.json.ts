import type { APIRoute } from "astro";
import { getPostList } from "@/lib/posts";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const localeParam = url.searchParams.get("locale");
  const locale = localeParam === "en" ? "en" : "zh";
  const posts = await getPostList(true, locale);
  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json" },
  });
};
