import { z } from "zod";

const createSkillValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    image: z.string().optional(),
    parcentage: z.number().int().min(0).max(100),
    userId: z.string().uuid(),
  }),
});
const updateSkillValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    image: z.string().optional(),
    parcentage: z.number().int().min(0).max(100).optional(),
  }),
});

export const SkillValidationShemas = {
  createSkillValidationSchema,
  updateSkillValidationSchema,
};
