import { z } from 'zod';

const createPostValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }).min(1, 'Title cannot be empty'),  
    discription: z.string({
      required_error: 'Description is required',
    }).min(1, 'Description cannot be empty'),
    image: z.string({
      required_error: 'Image URL is required',
    }).url('Image must be a valid URL'), 
    likes: z.number().default(0),   
    likedBy: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid user ID format')), 
  }),
});

export const ValidatedPost = {
  createPostValidationSchema,
};
