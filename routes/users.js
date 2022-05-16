
const express = require("express");
const { register} = require("../controllers/users");


const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
    res.json("users");
 });

usersRouter.post("/register", register);


module.exports = usersRouter;