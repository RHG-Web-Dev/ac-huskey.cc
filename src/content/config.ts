import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	schema: z.object({
		draft: z.boolean().optional(),
		title: z.string(),
    date: z.string(),
  }),
});

const credentials = defineCollection({
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
		expires: z.string().optional(),
    category: z.string(),
    badge: z.string(),
  }),
});

const projects = defineCollection({
	schema: z.object({
		draft: z.boolean().optional(),
		date: z.string(),
    dateEnd: z.string().optional(),
    location: z.string().optional(),
		title: z.string(),
		tags: z.string().array(),
		tech: z.array(z.string()),
  }),
});

export const collections = {
	blog,
	credentials,
	projects,
};