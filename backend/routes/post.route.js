const express = require("express");
const { Users } = require("../userModel/User.model");
const { PostModel } = require("../userModel/Post.model");
const app = express.Router();
require("dotenv").config();

// <==================================== Create a new post. <========================================>

app.post("/posts", async (req, res) => {
  const { user_id, content } = req.body;
  let userExit;
  try {
    userExit = await Users.findById(user_id);
    if (!userExit) {
      res.status(404).send({ message: "User not found" });
    }

    // Create new Post
    const post = new PostModel({ user_id, content });
    await post.save();

    res.status(201).send(post);
  } catch (err) {
    res.status(500).send({ message: "Something went wrong" });
    console.log(err);
  }
});

module.exports = app;
