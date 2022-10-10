const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: false,
    },
    category: {
      type: Array,
      required: false,
    },
    posts: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostsSchema);
