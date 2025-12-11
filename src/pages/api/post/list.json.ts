import { getPostList } from "@/lib/posts";

export async function GET() {
  const posts = await getPostList();
  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json" },
  });
}

