const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
  
 
});

const usersModel = mongoose.model("User", usersSchema);

module.exports = usersModel;
