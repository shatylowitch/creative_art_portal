require("dotenv/config");
require("./db");
const express = require("express");
const cors = require("cors");

const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");

const app = express();
const port = process.env.PORT || 6666;

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

app.use("/posts", postsRouter);

app.use("/auth", usersRouter);





app.listen(port, () => {
  console.log(`Port running on http://localhost:${port}`);
});
