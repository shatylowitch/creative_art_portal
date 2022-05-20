const usersModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    // check if the email exist in DB
    const found = await usersModel.findOne({ email });
    // throw the err if user doesn't existing
    if (!found) throw new Error("invalid details____invalid email");

    // compare the password and dcrypt
    const match = await bcrypt.compare(password, found.password);
    // throw the err if the password is wrong
    if (!match) throw new Error("invalid details____invalid password");

    // if user exist and password matches => sign the tocken
    const token = jwt.sign(
      { id: found._id, email: found.email },
      process.env.JWT_SECRET,
      { expiresIn: "666m" }
    );
    res.json(token);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const signup = async (req, res, next) => {
  try {
    const {
      body: { userName, email, password },
    } = req;


    const found = await usersModel.findOne({ email });
    if (found)
      throw new Error(
        "Clones are not allowed here. You have already registered with this email before"
      );
    const hash = await bcrypt.hash(password, 5);

    const user = await usersModel.create({ userName, email, password: hash });

    const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET, {
      expiresIn: "120m",
    });


    res.json(token);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  login,
  signup,
};
