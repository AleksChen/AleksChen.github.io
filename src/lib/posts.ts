import { DEFAULT_COVER_MAP } from "@/constant/devicons";
import { getCollection, getEntry } from "astro:content";
import type { CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export interface ShortPostData {
  id: string;
  slug: string;
  title: string;
  date: Date;
  updatedAt?: Date;
  tags: string[];
  draft: boolean;
  cover?: { src: string; alt?: string };
  intro?: string;
  // Compatibility fields
  createTime: number;
  updateTime: number;
}

export function getCoverFromTags(tags: string[]): {
  src: string;
  alt?: string;
} {
  const lowerTags = tags.map((t) => t.toLowerCase());
  for (const tag of lowerTags) {
    if (DEFAULT_COVER_MAP[tag]) {
      return DEFAULT_COVER_MAP[tag];
    }
  }
  return DEFAULT_COVER_MAP.default;
}

export function extractIntro(body: string): string {
  const lines = body.split("\n").filter((line) => {
    const trimmed = line.trim();
    return (
      trimmed &&
      !trimmed.startsWith("#") &&
      !trimmed.startsWith("!") &&
      !trimmed.startsWith("import ") &&
      !trimmed.startsWith("export ") &&
      !trimmed.startsWith("<") &&
      !trimmed.startsWith("```") &&
      !trimmed.startsWith("-") &&
      !trimmed.startsWith(">")
    );
  });
  return lines[0]?.slice(0, 200) || "";
}

export async function getPostList(
  filterDraft = true
): Promise<ShortPostData[]> {
  const posts = await getCollection("posts", ({ data }) => {
    return filterDraft ? !data.draft : true;
  });

  const sorted = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return sorted.map((p) => {
    const intro = p.data.intro || extractIntro(p.body);
    const cover = p.data.cover
      ? { src: p.data.cover }
      : getCoverFromTags(p.data.tags);

    const createTime = p.data.date.getTime();
    const updateTime = p.data.updatedAt
      ? p.data.updatedAt.getTime()
      : createTime;

    return {
      id: p.id,
      slug: p.slug,
      title: p.data.title,
      date: p.data.date,
      updatedAt: p.data.updatedAt,
      tags: p.data.tags,
      draft: p.data.draft,
      cover,
      intro,
      createTime,
      updateTime,
    };
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return getEntry("posts", slug) || null;
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getCollection("posts", ({ data }) => {
    return !data.draft;
  });
  const tagSet = new Set<string>();
  posts.forEach((p) => p.data.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet);
}

export async function getPostsByTag(tag: string): Promise<ShortPostData[]> {
  const allPosts = await getPostList(true);
  return allPosts.filter((p) =>
    p.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}
