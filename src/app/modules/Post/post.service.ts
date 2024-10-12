import { TPost } from './post.interface';
import { Post } from './post.model';

export const createPost = async (payload: TPost, image: string) => {
  payload.image = image;

  const result = await Post.create(payload);
  return result;
};

export const PostServices = {
  createPost,
};
