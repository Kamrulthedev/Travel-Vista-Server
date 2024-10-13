import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,  // Ensure a user is always associated with a post
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: String,  // Assuming the image field is optional
    likes: {
      type: Number,
      default: 0,
    },
    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Optional: Add a virtual field for the like count
postSchema.virtual('likeCount').get(function () {
  return this.likedBy.length;
});

export const Post = mongoose.model('Post', postSchema);
