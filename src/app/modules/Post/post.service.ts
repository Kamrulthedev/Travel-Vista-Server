/* eslint-disable @typescript-eslint/no-explicit-any */
import { TPost } from './post.interface';
import { Post } from './post.model';

const createPost = async (payload: TPost, image: string, id: any) => {
  console.log(id);
  payload.user = id;
  payload.image = image;
console.log(payload)
  const result = await Post.create(payload);
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
