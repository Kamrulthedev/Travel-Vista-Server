import express from 'express';
import { LikeControllar } from './like.controllar';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
const router = express.Router();

// Like a post
router.post(
  '/like/post/:postId',
  auth(USER_ROLE.ADMIN, USER_ROLE.USER),
  LikeControllar.likePost
);

// Unlike a post
router.delete('/unlike/post/:postId', LikeControllar.unlikePost);

export const LikeRoutes = router;
