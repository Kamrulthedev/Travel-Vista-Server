import { USER_Role } from "./user.constant";

export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role:keyof typeof USER_Role;
  address: string;
  profileImg: string;
  passwordChangedAt?: Date;
  needsPasswordChange: boolean;
  isDeleted: boolean;
}