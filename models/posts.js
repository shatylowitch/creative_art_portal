const { Schema, model, Types } = require("mongoose");

const postsSchema = new Schema({
  caption: String,
  description: String,
  category: String,
  img: String,
  user: { type: Types.ObjectId, ref: "User" },
});

const postsModel = model("Post", postsSchema);

module.exports = postsModel;
