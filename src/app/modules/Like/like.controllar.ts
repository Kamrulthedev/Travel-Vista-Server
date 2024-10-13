import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { LikeService } from './like.service';

export const likePost = catchAsync(async (req, res) => {
  const postId = req.params?.postId;
  const userId = req.user?._id;
  console.log(req.params.postId)
  const post = await LikeService.likePost(postId, userId);
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
  const post = await LikeService.unlikePost(postId, userId);
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
