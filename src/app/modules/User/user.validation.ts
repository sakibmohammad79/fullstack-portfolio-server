import z from "zod";

const adminSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  designation: z.string(),
  resumeUrl: z.string().url(),
  image: z.string().url().optional(),
  introduction: z.string().optional(),
});
const createUserValidationSchema = z.object({
  body: z.object({
    password: z.string().min(6),
    admin: adminSchema,
  }),
});

export const UserValidationSchemas = {
  createUserValidationSchema,
};
