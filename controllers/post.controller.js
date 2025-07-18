const Post = require ("../models/Post.js");

const createPost = async (req, res) => {
  try {
    const { name, idea } = req.body;

    if (!name || !idea) {
      return res.status(400).json({ message: "Name and idea are required" });
    }

    const newPost = new Post({
      name,
      idea: [
        {
          text: idea,
          createdAt: Date.now(),
        },
      ],
    });

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {createPost,getPosts}