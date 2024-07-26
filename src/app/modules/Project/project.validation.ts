import z from "zod";

const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    details: z.string(),
    url: z.string().url(),
    startDate: z.string(),
    endDate: z.string(),
    userId: z.string(),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    details: z.string().optional(),
    url: z.string().url().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    userId: z.string().optional(),
  }),
});

export const ProjectValidationSchemas = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
