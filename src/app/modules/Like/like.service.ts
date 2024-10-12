import { Post } from '../Post/post.model';
import { Like } from './like.model';

export const likePost = async (userId: string, postId: string) => {
  // Check if the user already liked the post
  const existingLike = await Like.findOne({ user: userId, post: postId });
  if (existingLike) {
    throw new Error('You already liked this post.');
  }
  const like = new Like({
    user: userId,
    post: postId,
  });
  // Save the like
  await like.save();
  // Optionally, update the post's like count
  const post = await Post.findById(postId);
  post.likes += 1;
  await post.save();
  return like;
};

export const unlikePost = async (userId, postId) => {
  const like = await Like.findOneAndDelete({ user: userId, post: postId });

  if (!like) {
    throw new Error('You have not liked this post.');
  }

  // Optionally, update the post's like count
  const post = await Post.findById(postId);
  post.likes -= 1;
  await post.save();
};
