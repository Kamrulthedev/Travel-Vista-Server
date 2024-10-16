import express from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { PostRoutes } from '../modules/Post/post.route';
import { LikeRoutes } from '../modules/Like/like.route';
import { VerifyRoutes } from '../modules/Verify/verify.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: "/posts",
    route: PostRoutes
  },
  {
    path: "/like",
    route: LikeRoutes
  },
  {
    path: "/verify",
    route: VerifyRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
