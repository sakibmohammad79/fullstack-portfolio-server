import z from "zod";

const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    image: z.string(),
    description: z.string(),
    details: z.string(),
    technology: z.string(),
    url: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    userId: z.string(),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    details: z.string().optional(),
    technology: z.string().optional(),
    url: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    userId: z.string().optional(),
  }),
});

export const ProjectValidationSchemas = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
