import mongoose from 'mongoose';
import { Post } from '../Post/post.model';
import { Like } from './like.model';

const likePost = async (userId: string, postId: string) => {
  console.log(userId, postId)
  const existingLike = await Like.findOne({ user: userId, post: postId });
  console.log(existingLike)
  if (existingLike) {
    throw new Error('You already liked this post.');
  }
  const like = new Like({
    user: new mongoose.Types.ObjectId(userId),
    post: new mongoose.Types.ObjectId(postId),
  });
  await like.save();
  const post = await Post.findById(postId);
  if (post) {
    (post.likedBy as mongoose.Types.ObjectId[]).push(
      new mongoose.Types.ObjectId(userId)
    );
    post.likes += 1;
    await post.save();
  }
  return like;
};

const unlikePost = async (userId: string, postId: string) => {
  // Find and remove the like
  const like = await Like.findOneAndDelete({ user: userId, post: postId });
  if (!like) {
    throw new Error('You have not liked this post.');
  }
  // Find the post and decrement the like count
  const post = await Post.findById(postId);
  if (!post) {
    throw new Error('Post not found.');
  }
  // Ensure that the post's like count doesn't go below 0
  if (post.likes > 0) {
    post.likes -= 1;
  }
  await post.save();
};

export const LikeService = {
  likePost,
  unlikePost,
};
