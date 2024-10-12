

// Like a post
exports.likePost = async (req, res) => {
    try {
      const userId = req.user.id;
      const postId = req.params.postId;
  
      const like = await LikeService.likePost(userId, postId);
      res.status(200).json(like);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  
  // Unlike a post
  exports.unlikePost = async (req, res) => {
    try {
      const userId = req.user.id;
      const postId = req.params.postId;
  
      await LikeService.unlikePost(userId, postId);
      res.status(200).json({ message: 'Post unliked' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  