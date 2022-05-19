const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  userName: { type: String, require: false },
  password: { type: String, require: true },
  createdAt: { type: Date, default: Date.now() },
  
});

const usersModel = mongoose.model("User", usersSchema);

module.exports = usersModel;
