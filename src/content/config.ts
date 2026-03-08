import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    slug: z.string().optional(),
    cover: z.string().optional(),
    intro: z.string().optional(), // In case it's manually specified
    seoImage: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    seoKeywords: z.array(z.string()).optional(),
    // Book-specific fields (optional)
    author: z.string().optional(),
    status: z.enum(["reading", "completed", "wishlist"]).optional(),
    rating: z.number().min(0).max(5).optional(),
    startDate: z.coerce.date().optional(),
    finishDate: z.coerce.date().optional(),
    pages: z.number().optional(),
  }),
});

export const collections = {
  posts,
};
