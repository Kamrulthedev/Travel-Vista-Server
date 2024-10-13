import mongoose from 'mongoose';
import { z } from 'zod';

const objectIdSchema = z
  .string()
  .refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: 'Invalid ObjectId',
  });


const createPostValidationSchema = z.object({
  body: z.object({
    userId: z.string(),
    title: z
      .string({
        required_error: 'Title is required',
      })
      .min(1, 'Title cannot be empty'),
    description: z
      .string({
        required_error: 'Description is required',
      })
      .min(1, 'Description cannot be empty'),
    image: z.string({}).optional(),
    likes: z.number().default(0),
    likedBy: z.array(objectIdSchema).default([]), 
  }),
});

export const ValidatedPost = {
  createPostValidationSchema,
};
