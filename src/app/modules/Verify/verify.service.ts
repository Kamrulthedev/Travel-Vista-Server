import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../User/user.model';
import { Verify } from './verify.model';

const verifyAccount = async (verifyData: any) => {
  const { userId, ammount, name, email, phone, addess } = verifyData;
  const user = await User.findById(userId);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User Is Found');
  }
  if (user.status === 'BLOCKED') {
    throw new AppError(httpStatus.BAD_REQUEST, 'User Is BlockedF');
  }
  const AccountData = new Verify({
    user: userId,
    name,
    ammount,
    email,
    phone,
    addess,
  });
  const verify = await AccountData.save();
  await verify.populate('user');
  return verify;
};

//get all Verify Account
const getAllVerifyAccount = async () => {
  const result = await Verify.find().populate('user');
  return result;
};

const getMyVerifayAccoount = async (userId: any) => {
  const result = await Verify.find(userId).populate('user');
  return result;
};

export const VerifyService = {
  verifyAccount,
  getAllVerifyAccount,
  getMyVerifayAccoount,
};
