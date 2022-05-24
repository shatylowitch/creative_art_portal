const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (req.headers.authorization) {
    const {
      headers: { authorization },
    } = req;

    const token = authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      next();
    } catch (err) {
      res.status(403).send(err.message);
    }
  } else {
    res
      .status(403)
      .send(
        "Sorry, you are not logged in. Please try logging in with your username and password."
      );
  }
};

module.exports = verifyToken;
