import { z } from 'zod';
import { USER_ROLE, USER_STATUS, Verify_SATUS } from './user.constant';
import { verify } from 'jsonwebtoken';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    role: z.nativeEnum(USER_ROLE),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email({
        message: 'Invalid email',
      }),
    password: z.string({
      required_error: 'Password is required',
    }),
    status: z.nativeEnum(USER_STATUS).default(USER_STATUS.ACTIVE),
    phone: z.string(),
    profileImg: z.string().optional(),
    accountStatus: z.nativeEnum(Verify_SATUS).default(Verify_SATUS.PENDING)
  }),
});

const updateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    role: z.nativeEnum(USER_ROLE).optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    status: z.nativeEnum(USER_STATUS).optional(),
    phone: z.string().optional(),
    ProfileImg: z.string().optional(),
    accountStatus: z.nativeEnum(Verify_SATUS).optional()
  }),
});

export const UserValidation = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
