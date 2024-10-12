import express from 'express';
const router = express.Router();

// Like a post
router.post('/like/post/:postId', likeController.likePost);

// Unlike a post
router.delete('/unlike/post/:postId', likeController.unlikePost);

// Like a comment
router.post('/like/comment/:commentId', likeController.likeComment);

// Unlike a comment
router.delete('/unlike/comment/:commentId', likeController.unlikeComment);

export const LikeRoutes = router;
