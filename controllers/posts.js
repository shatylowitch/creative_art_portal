const postsModel = require("../models/posts");
const { cloudinary } = require("../utils/cloudinary");

const getPosts = async (req, res, next) => {
  try {
    const posts = await postsModel.find({});
    res.json(posts);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getPost = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const post = await postsModel.findById(id);
    res.json(post);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createPost = async (req, res, next) => {
  try {
    const {
      body: { caption, base64 },
      user: { id },
    } = req;
    const { url } = await cloudinary.uploader.upload(base64);
    postsModel.create({ caption, img: url, userId: id });
    res.json({ msg: "Uploaded" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "Something went wrong" });
  }
};

const updatePost = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;

    const updatedPost = await postsModel.findByIdAndUpdate(id, body);
    res.json(updatedPost);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const deletedPost = await postsModel.findByIdAndDelete(id);
    res.json(deletedPost);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};