import { z } from "zod";

const createBlogValidationSchema = z.object({
  body: z.object({
    id: z.number().int().optional(),
    name: z.string(),
    title: z.string(),
    content: z.string(),
    image: z.string(),
    published: z.boolean().default(false),
    userId: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  }),
});
const updateBlogValidationSchema = z.object({
  body: z.object({
    id: z.number().int().optional(),
    name: z.string().optional(),
    title: z.string().optional(),
    content: z.string().optional(),
    image: z.string().optional(),
    published: z.boolean().default(false).optional(),
    userId: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  }),
});

export const BlogValidationSchemas = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
