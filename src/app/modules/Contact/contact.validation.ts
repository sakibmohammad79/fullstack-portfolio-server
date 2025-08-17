import { z } from "zod";

export const createContactSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
      })
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be less than 50 characters'),
    
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email('Please provide a valid email address'),
    
    subject: z
      .string({
        required_error: 'Subject is required',
      })
      .min(5, 'Subject must be at least 5 characters')
      .max(200, 'Subject must be less than 100 characters'),
    
    message: z
      .string({
        required_error: 'Message is required',
      })
      .min(10, 'Message must be at least 10 characters')
      .max(1000, 'Message must be less than 1000 characters'),
  }),
});

export const getContactsSchema = z.object({
  query: z.object({
    page: z.string().optional().default('1'),
    limit: z.string().optional().default('10'),
    search: z.string().optional(),
  }),
});

export type CreateContactInput = z.infer<typeof createContactSchema>;
export type GetContactsInput = z.infer<typeof getContactsSchema>;