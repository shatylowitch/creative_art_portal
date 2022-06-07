const express = require("express");
const { login, signup, getUser } = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/login", login);

usersRouter.post("/signup", signup);

usersRouter.get("/profile/:id", getUser);

module.exports = usersRouter;
