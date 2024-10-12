import { USER_ROLE } from '../User/user.constant';

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
};
