import express from 'express';
import { LikeControllar } from './like.controllar';
const router = express.Router();

// Like a post
router.post('/like/post/:postId', LikeControllar.likePost);

// Unlike a post
router.delete('/unlike/post/:postId', LikeControllar.unlikePost);

// // Like a comment
// router.post('/like/comment/:commentId', LikeControllar.likeComment);

// // Unlike a comment
// router.delete('/unlike/comment/:commentId', LikeControllar.unlikeComment);

export const LikeRoutes = router;
