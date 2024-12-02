import { writeFile } from "fs/promises";
import type { APIRoute, GetStaticPaths } from "astro";
import { getPageList, getSinglePageData } from "./list";

export const GET: APIRoute = async ({ params }) => {
  const id = params.id;
  if (id == undefined) return new Response(JSON.stringify({}), { status: 200 });
  const data = await getSinglePageData(id);
  return new Response(JSON.stringify(data), { status: 200 });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPageList(false);
  return posts.map((p) => ({
    params: {
      id: p.id,
    },
  }));
};

export const POST: APIRoute = async (ctx) => {
  const form = await ctx.request.formData();
  const id = ctx.params.id;
  await Promise.all(
    form
      .getAll("assets")
      ?.flat()
      .map(async (v) => {
        const file = v as File;
        return writeFile(`./public/post-assets/${file.name}`, Buffer.from(await file.arrayBuffer()));
      })
  );
  const content = form.get("content");
  if (typeof content === "string") {
    await writeFile(`./posts/${id}.json`, content, { encoding: "utf-8" });
  } else if (content instanceof File) {
    await writeFile(`./posts/${id}.json`, Buffer.from(await content.arrayBuffer()), { encoding: "utf-8" });
  }
  return new Response(JSON.stringify({ code: 0 }), { status: 200 });
};
