import type { APIRoute } from "astro";
import { DEFAULT_LOCALE, isLocale } from "@/i18n/config";
import { getPostList } from "@/lib/posts";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const localeParam = url.searchParams.get("locale") ?? undefined;
  const locale = isLocale(localeParam) ? localeParam : DEFAULT_LOCALE;
  const posts = await getPostList(true, locale);
  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json" },
  });
};
