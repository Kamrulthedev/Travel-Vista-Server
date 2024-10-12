import express from 'express';
import { PostControllar } from './post.controllar';
const router = express.Router();

router.post('/posts/create', PostControllar.createPost);
router.get('/posts/:id', PostControllar.getPostById);
router.get('/posts', PostControllar.getAllPosts);
router.put('/posts/:id', PostControllar.updatePost);
router.delete('/posts/:id', PostControllar.deletePost);

export const PostRoutes = router;
