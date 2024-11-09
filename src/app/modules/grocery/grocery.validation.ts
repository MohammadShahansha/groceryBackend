import { z } from 'zod';

const groceryProductSchema = z.object({
  body: z.object({
    productName: z.string().min(1, 'Product name is required').trim(),
    title: z.string().min(1, 'Title is required').trim(),
    price: z.number().positive('Price must be a positive number'),
    image: z.string().url('Image must be a valid URL'),
    quantity: z.number().positive('Quantity must be a positive number'),
    category: z.string().min(1, 'Category is required').trim(),
    description: z.string().min(1, 'Description is required').trim(),
    rating: z.number().min(0).max(5).optional(),
    vendorId: z.string(),
  }),
});
const updateGroceryProductSchema = z.object({
  body: z.object({
    productName: z
      .string()
      .min(1, 'Product name is required')
      .trim()
      .optional(),
    title: z.string().min(1, 'Title is required').trim().optional(),
    price: z.number().positive('Price must be a positive number').optional(),
    image: z.string().url('Image must be a valid URL').optional(),
    quantity: z
      .number()
      .positive('Quantity must be a positive number')
      .optional(),
    category: z.string().min(1, 'Category is required').trim().optional(),
    description: z.string().min(1, 'Description is required').trim().optional(),
    rating: z.number().min(0).max(5).optional().optional(),
    vendorId: z.string().optional(),
  }),
});

export const groceryValidation = {
  groceryProductSchema,
  updateGroceryProductSchema,
};
