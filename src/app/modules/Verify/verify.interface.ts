import mongoose from 'mongoose';

export type TVerify = {
  userId?: mongoose.Types.ObjectId;
  amount: string;
  name: string;
  email: string;
  phone: number;
  addess?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
