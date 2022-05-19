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
    console.log(found);

    if (found) throw new Error("Clones are not allowed here. You have already registered with this email before");
    const hash = await bcrypt.hash(password, 5);


    const user = await usersModel.create({userName, email, password:hash});
    
    const token = jwt.sign({id:user._id, email: user.email},
    process.env.JWT_SECRET, 
    {
    expiresIn: "120m",});

    res.json(token);
    } catch (err) {
    res.status(500).send(err.message);
  }};

  
module.exports = {
 register,
  signup,
};





