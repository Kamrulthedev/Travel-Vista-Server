import mongoose from 'mongoose';
import { TPost } from './post.interface';

const postSchema = new mongoose.Schema<TPost>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: String,
    description: String,
    image: String,
    likes: {
      type: Number,
      default: 0,
    },
    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
    virtuals: true,
  }
);

export const Post = mongoose.model('Post', postSchema);
