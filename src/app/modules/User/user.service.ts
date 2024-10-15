/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import { QueryBuilder } from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { USER_STATUS, UserSearchableFields } from './user.constant';
import { TUser } from './user.interface';
import { User } from './user.model';
import { JwtPayload } from 'jsonwebtoken';

const createUser = async (payload: TUser, url: string) => {
  console.log(url);
  if (payload) {
    payload.profileImg = url;
  }
  const user = await User.create(payload);
  return user;
};

const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const users = new QueryBuilder(User.find(), query)
    .fields()
    .paginate()
    .sort()
    .filter()
    .search(UserSearchableFields);
  const result = await users.modelQuery;
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const user = await User.findById(id);
  return user;
};

//update user
const updateUser = async (
  user: JwtPayload,
  data: Partial<any>,
  profileImg: any
) => {
  const filter = {
    email: user.email,
    status: USER_STATUS.ACTIVE,
  };
  const profile = await User.findOne(filter);
  if (!profile) {
    throw new AppError(httpStatus.NOT_FOUND, 'User profile does not exixts!');
  }
  if (profileImg) {
    data.profileImg = profileImg;
  } else {
    delete data.profileImg;
  }
  return await User.findOneAndUpdate(filter, data, { new: true });
};

// const UpdateProfileImg = async( user: any, img: any) =>{
//   const filter = {
//     email: user.email,
//     status: USER_STATUS.ACTIVE
// };
// const profile = await User.findOne(filter);
// if (!profile) {
//     throw new AppError(httpStatus.NOT_FOUND, "User profile does not exixts!")
// };
// if (img) {
//     data.profileImg = img
// }
// else {
//     delete data.profileImg;
// };
// return await User.findOneAndUpdate(filter, data, { new: true });
// }

export const UserServices = {
  createUser,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUser,
};
