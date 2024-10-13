import { z } from 'zod';

const createPostValidationSchema = z.object({
  body: z.object({
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
    image: z
      .string({
      }).optional(),
    likes: z.number().default(0),
    likedBy: z.array(
      z.string({
        required_error: 'Invalid user ID format',
      })
    ),
  }),
});

export const ValidatedPost = {
  createPostValidationSchema,
};
