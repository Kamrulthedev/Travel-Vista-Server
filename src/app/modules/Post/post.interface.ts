import mongoose from 'mongoose';

export type TPost = {
  title: string;
  discription: string;
  image: string;
  likes: number;
  likedBy: mongoose.ObjectId;
};
