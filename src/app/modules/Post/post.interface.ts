import mongoose from 'mongoose';

export type TPost = {
  userId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  image: string;
  likes: number;
  likedBy?: mongoose.Types.ObjectId;
  comments: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};
