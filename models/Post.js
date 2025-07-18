const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
    idea: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
        },
        text: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true } // Automatically adds createdAt & updatedAt
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
