// TinaCMS 数据获取工具
// 这个文件在 TinaCMS 初始化后会被自动生成的 client 替代
// 这里提供一个兼容层，方便迁移

import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface PostData {
  id: string;
  slug: string;
  title: string;
  date: string;
  updatedAt?: string;
  tags: string[];
  draft: boolean;
  cover?: string;
  body: string;
  intro?: string;
}

export interface ShortPostData {
  id: string;
  slug: string;
  title: string;
  date: string;
  updatedAt?: string;
  tags: string[];
  draft: boolean;
  cover?: { src: string; alt?: string };
  intro?: string;
  createTime: number;
  updateTime: number;
}

const POSTS_DIR = "./content/posts";

const DEFAULT_COVER_MAP: Record<string, { src: string }> = {
  javascript: { src: "/post-assets/cover/cover-js.png" },
  css: { src: "/post-assets/cover/cover-css.png" },
  html: { src: "/post-assets/cover/cover-html.png" },
  react: { src: "/post-assets/cover/cover-react.png" },
  vue: { src: "/post-assets/cover/cover-vue.png" },
  ios: { src: "/post-assets/cover/cover-ios.png" },
  google: { src: "/post-assets/cover/cover-google.png" },
  default: { src: "/post-assets/cover/cover-default.png" },
};

function getCoverFromTags(tags: string[]): { src: string; alt?: string } {
  const lowerTags = tags.map((t) => t.toLowerCase());
  for (const tag of lowerTags) {
    if (DEFAULT_COVER_MAP[tag]) {
      return DEFAULT_COVER_MAP[tag];
    }
  }
  return DEFAULT_COVER_MAP.default;
}

function extractIntro(body: string): string {
  // 移除 frontmatter 后提取第一段
  const lines = body.split("\n").filter((line) => {
    const trimmed = line.trim();
    return (
      trimmed &&
      !trimmed.startsWith("#") &&
      !trimmed.startsWith("!") &&
      !trimmed.startsWith("```") &&
      !trimmed.startsWith("-") &&
      !trimmed.startsWith(">")
    );
  });
  return lines[0]?.slice(0, 200) || "";
}

export async function getPostList(filterDraft = true): Promise<ShortPostData[]> {
  const files = await readdir(POSTS_DIR);
  const mdxFiles = files.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const filePath = path.join(POSTS_DIR, file);
      const content = await readFile(filePath, "utf-8");
      const { data, content: body } = matter(content);

      const slug = file.replace(/\.(mdx|md)$/, "");
      const createTime = new Date(data.date).getTime();
      const updateTime = data.updatedAt
        ? new Date(data.updatedAt).getTime()
        : createTime;

      return {
        id: slug,
        slug,
        title: data.title || "Untitled",
        date: data.date,
        updatedAt: data.updatedAt,
        tags: data.tags || [],
        draft: data.draft || false,
        cover: data.cover
          ? { src: data.cover }
          : getCoverFromTags(data.tags || []),
        intro: extractIntro(body),
        createTime,
        updateTime,
      };
    })
  );

  const sorted = posts.sort((a, b) => b.createTime - a.createTime);

  if (filterDraft) {
    return sorted.filter((p) => !p.draft);
  }

  return sorted;
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  const files = await readdir(POSTS_DIR);
  const file = files.find(
    (f) => f === `${slug}.mdx` || f === `${slug}.md`
  );

  if (!file) return null;

  const filePath = path.join(POSTS_DIR, file);
  const content = await readFile(filePath, "utf-8");
  const { data, content: body } = matter(content);

  return {
    id: slug,
    slug,
    title: data.title || "Untitled",
    date: data.date,
    updatedAt: data.updatedAt,
    tags: data.tags || [],
    draft: data.draft || false,
    cover: data.cover,
    body,
    intro: extractIntro(body),
  };
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getPostList(true);
  const tagSet = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet);
}

export async function getPostsByTag(tag: string): Promise<ShortPostData[]> {
  const posts = await getPostList(true);
  return posts.filter((p) =>
    p.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

