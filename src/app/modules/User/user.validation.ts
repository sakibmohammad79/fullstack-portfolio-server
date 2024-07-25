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
const updateAdminSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  designation: z.string().optional(),
  resumeUrl: z.string().url().optional(),
  image: z.string().url().optional(),
  introduction: z.string().optional(),
});
const updateUserValidationSchema = z.object({
  body: z.object({
    password: z.string().min(6).optional(),
    admin: updateAdminSchema.optional(),
  }),
});

export const UserValidationSchemas = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
