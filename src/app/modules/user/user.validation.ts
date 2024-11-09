import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email('Invalid email address'),
    password: z.string().min(5, 'Password must be at least 6 characters long'),
    image: z.string().optional(),
    needsPasswordChange: z.boolean().default(true),
    passwordChangedAt: z.date().optional(),
    about: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    skills: z.array(z.string()).optional(), // Allows multiple skills as an array of strings
    role: z.enum(['admin', 'user', 'vendor']).default('user'),
    isDeleted: z.boolean().default(false),
  }),
});
const updateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email('Invalid email address').optional(),
    password: z
      .string()
      .min(5, 'Password must be at least 6 characters long')
      .optional(),
    image: z.string().optional(),
    needsPasswordChange: z.boolean().default(true),
    passwordChangedAt: z.date().optional(),
    about: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    skills: z.array(z.string()).optional(), // Allows multiple skills as an array of strings
    role: z.enum(['admin', 'user', 'vendor']).default('user'),
    isDeleted: z.boolean().default(false),
  }),
});

export const userValidation = {
  userValidationSchema,
  updateUserValidationSchema,
};
