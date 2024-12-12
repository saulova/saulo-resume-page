import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      summary: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()),
      draft: z.boolean().optional(),
    }),
});

const portfolio = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      summary: z.string(),
      repository: z.string().url(),
    }),
});

// This key should match your collection directory name in "src/content"
export const collections = {
  blog,
  portfolio,
};