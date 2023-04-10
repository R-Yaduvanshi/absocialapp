const express = require("express");
const { connection } = require("./config/db");
const app = express();
const cors = require("cors");
const Users = require("./routes/user.route");
const Posts = require("./routes/post.route");
require("dotenv").config();
app.use(express.json());
const PORT = process.env.PORT || 7000;
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to My Social media app");
});

// Users route

app.use("/", Users);

// <================================== Post Routes <=================================================>

app.use("/posts", Posts);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connecting to DB Successfull");
  } catch (err) {
    console.log(err);
    console.log("Connecting to DB Unsuccessfull");
  }
  console.log(`Server running on port Number ${PORT}`);
});
