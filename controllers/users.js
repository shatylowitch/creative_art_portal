const usersModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
  res.send("login");
};

const signup = async (req, res, next) => {
  try {
    const {
      body: {userName, email, password},
    } = req;

    const found = await usersModel.findOne ({ email });
    if (!found) throw new Error("Clones are not allowed here. You have already registered with this email before");
    const match = await bcrypt.match(password, 5);
    if(!match) throw new Error("This password sucks. Try one more time");

    const user = await userModel.create({userName, email, password});
    
    const token = jwt.sign({id: found._id, email: found.email},
    process.env.JWT_SECRET, 
    {
    expiresIn: "120s",});

    res.json(token);
    } catch (err) {
    res.status(500).send(err.message);
  }};

  
module.exports = {
 register,
  signup,
};





