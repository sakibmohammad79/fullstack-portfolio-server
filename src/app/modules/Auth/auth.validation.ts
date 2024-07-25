import z, { AnyZodObject } from "zod";

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string().email({ message: "Please enter valid email address!" }),
    password: z.string().min(6),
  }),
});

export const AuthValidationSchemas = {
  loginValidationSchema,
};
