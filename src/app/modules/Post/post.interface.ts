import mongoose from 'mongoose';

export type TPost = {
  user: mongoose.Types.ObjectId;
  title: string;
  description: string;
  image: string;
  likes: number;
  likedBy: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};
