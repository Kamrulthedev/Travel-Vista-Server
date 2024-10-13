/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PostServices } from './post.service';

const createPost = catchAsync(async (req, res) => {
  if (!req.file) {
    throw new AppError(400, 'Please upload an image');
  }
  const result = await PostServices.createPost(req.body, req.file.path as any);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post created successfully',
    data: result,
  });
});

const getPostById = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const post = await PostServices.getPostById(postId);
  if (!post) {
    throw new AppError(404, 'Post not found');
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    data: post,
  });
});



const getAllPosts = catchAsync(async (req, res) => {
  const posts = await PostServices.getAllPosts();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    data: posts,
  });
});



const updatePost = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const updatedData = req.body;
  const post = await PostServices.updatePost(postId, updatedData);
  if (!post) {
    throw new AppError(404, 'Post not found');
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post updated successfully',
    data: post,
  });
});

const deletePost = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const post = await PostServices.deletePost(postId);
  if (!post) {
    throw new AppError(404, 'Post not found');
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post deleted successfully',
    data: post,
  });
});


export const PostControllar = {
  createPost,
  getPostById,
  getAllPosts,
  updatePost,
  deletePost
};
