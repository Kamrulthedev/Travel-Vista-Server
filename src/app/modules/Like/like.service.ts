import mongoose from 'mongoose';
import { Post } from '../Post/post.model';
import { Like } from './like.model';

const likePost = async (userId: string, postId: string) => {
  const existingLike = await Like.findOne({ user: userId, post: postId });
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


//like Post
const unlikePost = async (postId: string, userId: string) => {
  // Find and remove the like
  const like = await Like.find({ user: userId, post: postId });
  if (!like) {
    throw new Error('You have not liked this post.');
  }
  // Find the post
  const post = await Post.findById(postId);
  if (!post) {
    throw new Error('Post not found.');
  }
  // Ensure that the post's like count doesn't go below 0
  if (post.likes > 0) {
    post.likes -= 1;
    // Remove the user from the likedBy array
    post.likedBy = post.likedBy.filter(
      (user) => user.toString() !== userId
    );
  }
  // Save the post with updated likes and likedBy array
  await post.save();
};




export const LikeService = {
  likePost,
  unlikePost,
};
