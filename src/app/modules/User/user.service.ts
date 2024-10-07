/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from '../../builder/QueryBuilder';
import config from '../../config';
import { UserSearchableFields } from './user.constant';
import { IUser } from './user.interface';
import { User } from './user.model';
import bcryptJs from 'bcryptjs';

//create user
const createUser = async (user: IUser, url: any) => {
  user.password = await bcryptJs.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  //create imageName and Path
  // const imageName = `${user?.phone}${user?.name}`;
  // const path = file?.path;
  // //send Img cludinary
  // const { secure_url }: any = await SendImgToClodinary(imageName, path);
  
  user.profileImg = url;

  return await User.create(user);
};

//get User By Id
const findUserById = async (userId: string) => {
  return await User.findById(userId);
};


//Get All Users
const getAllUsers = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find({ isDeleted: false }), query)
    .search(UserSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await userQuery.modelQuery;
  const metaData = await userQuery.countTotal();
  return {
    meta: metaData,
    data: result,
  };
};


//Update User
const updateUserById = async (userId: string, payload: Partial<IUser>) => {
  const result = await User.findByIdAndUpdate({ _id: userId }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};


//delete User
const deleteUserById = async (userId: string) => {
  const result = await User.findByIdAndUpdate(
    userId,
    {
      isDeleted: true,
    },
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};


//export all function
export const UserService = {
  createUser,
  findUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
};
