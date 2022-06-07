const express = require("express");
const verifyToken = require("../middleware/verification");
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts");

const postsRouter = express.Router();
postsRouter.route("/").get(getPosts).post(verifyToken, createPost);
postsRouter.route("/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = postsRouter;
