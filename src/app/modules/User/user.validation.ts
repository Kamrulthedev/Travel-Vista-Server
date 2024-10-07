import { z } from 'zod';

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().optional(),
    phone: z.string(),
    role: z.enum(['admin', 'user']).optional(), 
    address: z.string(),
    profileImg: z.string().optional(), 
    rating: z.number().optional(),
    rents: z.array(z.string()).optional(),
  }),
});

export const updateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(), 
    email: z.string().email().optional(),
    phone: z.string().optional(),
    password: z.string().optional(),
    role: z.enum(['admin', 'user']).optional(),
    address: z.string().optional(),
    profileImg: z.string().optional(), 
    rating: z.number().optional(), 
    rents: z.array(z.string()).optional(), 
  }),
});

export const UserValidations = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
