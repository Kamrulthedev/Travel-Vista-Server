import express, { NextFunction, Request, Response } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import {
  createUserValidationSchema,
  updateUserValidationSchema,
} from './user.validation';
import auth from '../../middlewares/auth';
import { USER_Role } from './user.constant';
import { multerUpload } from '../../config/multer.config';

const router = express.Router();

router.post(
  '/create-user',
  // upload.single("file"),
  // (req: Request, res: Response, next: NextFunction) => {
  //   req.body = JSON.parse(req.body.data);
  //   next()
  // },
  multerUpload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createUserValidationSchema),
  UserController.createUser,
);

router.get(
  '/',
  auth(USER_Role.admin, USER_Role.user),
  UserController.getAllUsers,
);

router.get(
  '/:id',
  auth(USER_Role.admin, USER_Role.user),
  UserController.findUserById,
);

router.patch(
  '/:id',
  auth(USER_Role.admin, USER_Role.user),
  validateRequest(updateUserValidationSchema),
  UserController.updateUserById,
);

router.delete(
  '/:id',
  auth(USER_Role.admin, USER_Role.user),
  UserController.deleteUserById,
);

export const UserRoutes = router;
