import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../User/user.model';
import { Verify } from './verify.model';

const verifyAccount = async (verifyData: any) => {
  const { userId, name, email, phone, addess } = verifyData;

  const user = await User.findById(userId);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User Is Found');
  }

  if(user.status === "BLOCKED"){
   throw new AppError(httpStatus.BAD_REQUEST, "User Is BlockedF")
  }

  const booking = new Verify({
    user: userId,
    name,
    email,
    phone,
    addess,
  });
  const verify = await booking.save();
  await verify.populate('user');

  return verify;
};

export const VerifyService = {
  verifyAccount,
};
