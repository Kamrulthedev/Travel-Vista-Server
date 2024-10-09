import { z } from 'zod';

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'), 
    email: z.string().email('Please fill a valid email address'), 
    password: z.string().min(1, 'Password is required'), 
    phone: z.string().min(1, 'Phone is required'), 
    role: z.enum(['admin', 'user']).optional(), 
    address: z.string().optional(),
    profileImg: z.string().optional(),
    needsPasswordChange: z.boolean().optional(),
    passwordChangedAt: z.date().optional(), 
    isDeleted: z.boolean().optional(), 
  }),
});

export const updateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email('Please fill a valid email address').optional(),
    phone: z.string().optional(),
    password: z.string().optional(),
    role: z.enum(['admin', 'user']).optional(),
    address: z.string().optional(),
    profileImg: z.string().optional(),
    needsPasswordChange: z.boolean().optional(),
    passwordChangedAt: z.date().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
