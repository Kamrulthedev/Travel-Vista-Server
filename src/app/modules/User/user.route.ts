import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import {
  createUserValidationSchema,
  updateUserValidationSchema,
} from './user.validation';
import auth from '../../middlewares/auth';
import { USER_Role } from './user.constant';

const router = express.Router();

router.post(
  '/create-user',
  auth(USER_Role.admin, USER_Role.user),
  validateRequest(createUserValidationSchema),
  UserController.createUser,
);

router.get('/', auth(USER_Role.admin), UserController.getAllUsers);

router.get(
  '/:id',
  auth(USER_Role.admin, USER_Role.user),
  UserController.findUserById,
);

router.patch(
  '/:id',
  auth(USER_Role.admin),
  validateRequest(updateUserValidationSchema),
  UserController.updateUserById,
);

router.delete('/:id', auth(USER_Role.admin), UserController.deleteUserById);

export const UserRoutes = router;
