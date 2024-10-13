import mongoose from 'mongoose';

export type Tlike = {
  user: mongoose.Types.ObjectId;
  post: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};
