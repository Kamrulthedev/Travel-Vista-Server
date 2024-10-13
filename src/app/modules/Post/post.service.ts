/* eslint-disable no-self-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TPost } from './post.interface';
import { Post } from './post.model';

const createPost = async (payload: TPost, image: string) => {
  payload.image = image;
  const result = await (await Post.create(payload))
    .populate('userId');
  return result;
};


const getPostById = async (postId: string) => {
  return await Post.findById(postId).populate('likedBy');
};

const getAllPosts = async () => {
  return await Post.find().populate('likedBy');
};

const updatePost = async (postId: string, updatedData: TPost) => {
  const post = await Post.findByIdAndUpdate(postId, updatedData, { new: true });
  return post;
};
const deletePost = async (postId: string) => {
  const post = await Post.findByIdAndDelete(postId);
  return post;
};

export const PostServices = {
  createPost,
  getPostById,
  getAllPosts,
  updatePost,
  deletePost,
};
