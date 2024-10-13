import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { LikeService } from './like.service';
import { Post } from '../Post/post.model';

export const likePost = catchAsync(async (req, res) => {
  const postId = req.params?.postId;
  const userId = req.body?.user;
  // Call likePost method from LikeService
  const post = await LikeService.likePost(userId, postId);

  // Fetch the updated post after liking it
  const updatedPost = await Post.findById(postId).populate('likedBy');

  // Send the response with the updated post
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post liked successfully',
    data: {
      updatedPost,
      post,
    },
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
