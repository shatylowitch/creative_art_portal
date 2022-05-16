const { Schema, model, Types } = require("mongoose");

const postsSchema = new Schema({
  
  })

const postsModel = model("Post", postsSchema);

module.exports = postsModel;
