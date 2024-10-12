import express from 'express';
import { PostControllar } from './post.controllar';
const router = express.Router();

// Like a post
router.post('/Posts/create-post', PostControllar.createPost);

export const PostRoutes = router;
