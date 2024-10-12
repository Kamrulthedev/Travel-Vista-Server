import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PostServices } from '../Post/post.service';

export const likePost = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;
  const post = await PostServices.likePost(postId, userId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post liked successfully',
    data: post,
  });
});

export const unlikePost = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;
  const post = await PostServices.unlikePost(postId, userId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post unliked successfully',
    data: post,
  });
});

export const LikeControllar = {
  likePost,
  unlikePost,
};
