const { Schema, model, Types } = require("mongoose");

const postsSchema = new Schema({
  title: { type: String, requaire: true },
  body: { type: String, requaire: true },
  author: { type: Types.ObjectId, require: true, ref: "User"},
  createdAt: {type: Date, default: Date.now},
  isActive: { type: Boolean, default: true},
  // comments: [{ body: String, date: Date }],
  });

const postsModel = model("Post", postsSchema);

module.exports = postsModel;
