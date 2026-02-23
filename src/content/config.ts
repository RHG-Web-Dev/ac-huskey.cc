import { defineCollection, z } from "astro:content";

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
		order: z.number(),
		dateStart: z.string(),
    dateEnd: z.string().optional(),
    location: z.string().optional(),
		title: z.string(),
		tech: z.array(z.string()),
  }),
});

export const collections = {
	credentials,
	projects,
};