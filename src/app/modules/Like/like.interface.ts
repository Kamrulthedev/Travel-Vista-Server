import mongoose from 'mongoose';

export type Tlike = {
  user: mongoose.ObjectId;
  post: mongoose.ObjectId;
  comment: mongoose.ObjectId;
  createdAt?: Date;
};
