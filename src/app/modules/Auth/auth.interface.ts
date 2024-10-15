import { USER_ROLE, Verify_SATUS } from '../User/user.constant';

export type TLoginUser = {
  email: string;
  password: string;
};

export type TRegisterUser = {
  name: string;
  email: string;
  phone: string;
  password: string;
  address?: string;
  role: keyof typeof USER_ROLE;
  accountStatus?: keyof typeof Verify_SATUS;
};
