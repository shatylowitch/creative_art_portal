
const express = require("express");
const {signup} = require("../controllers/users");
//const verification = require("../middleware/verification")

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
    res.json("users");
 });

usersRouter.post("/signup", signup);


module.exports = usersRouter;