const postsModel = require("../models/posts");
const { cloudinary } = require("../utils/cloudinary");

const getPosts = async (req, res, next) => {
  try {
    const {
      query: { category },
    } = req;
    const query = category ? { category } : {};
    console.log(query, category);
    const posts = await postsModel.find(query);
    res.json(posts);
  } catch (err) {
    //  res.status(500).send(err.message);
    next(err);
  }
};

const getPost = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const post = await postsModel.findById(id).populate("user");
    res.json(post);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createPost = async (req, res, next) => {
  try {
    const {
      body: { caption, base64, description, category },
      user: { id },
    } = req;

    const post = await postsModel.create({
      caption,
      img: base64,
      user: id,
      description,
      category,
    });
    res.json(post);
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
