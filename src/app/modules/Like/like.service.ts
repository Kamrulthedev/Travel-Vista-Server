import { Post } from '../Post/post.model';
import { Like } from './like.model';

const likePost = async (userId: string, postId: string) => {
  // Check if the user has already liked the post
  const existingLike = await Like.findOne({ user: userId, post: postId });
  if (existingLike) {
    throw new Error('You already liked this post.');
  }
  // Create a new Like
  const like = new Like({
    user: userId,
    post: postId,
  });
  // Save the like
  await like.save();

  // Find the post and increment the like count
  const post = await Post.findById(postId);
  if (!post) {
    throw new Error('Post not found.');
  }
  post.likes += 1;
  await post.save();

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
