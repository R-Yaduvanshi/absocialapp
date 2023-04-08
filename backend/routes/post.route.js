const express = require("express");
const { Users } = require("../userModel/User.model");
const { PostModel } = require("../userModel/Post.model");
const app = express.Router();
require("dotenv").config();

// <==================================== Create a new post. <========================================>

app.post("/posts", async (req, res) => {
  const { user_id, content, likes } = req.body;
  let userExit;
  try {
    userExit = await Users.findById(user_id);
    if (!userExit) {
      res.status(404).send({ message: "User not found" });
    }

    // Create new Post
    const post = new PostModel({ user_id, content, likes });
    await post.save();

    res.status(201).send(post);
  } catch (err) {
    if (err.name === "ValidationError") {
      let errors = {};

      Object.keys(err.errors).forEach((key) => {
        errors[key] = err.errors[key].message;
      });

      return res.status(400).send(errors);
    }
    res.status(500).send({ message: "Something went wrong" });
    console.log(err);
  }
});

// <==================================== Retrieve a post by id. <====================================>

app.get("/posts/:id", async (req, res) => {
  const postID = req.params.id;

  try {
    const postIdExit = await PostModel.findById(postID);
    if (!postIdExit) {
      return res.status(404).send({ message: "Post not found" });
    }

    res.status(200).send(postIdExit);
  } catch (err) {
    res.status(400).send({ message: "Something went wrong" });
  }
});

// <================================= Retrieve a post by id. <=======================================>

app.put("/posts/:id", async (req, res) => {
  const postID = req.params.id;
  try {
    const updatePost = await PostModel.findByIdAndUpdate(postID, req.body);
    res.status(200).send({ message: "Post updated Success" });
  } catch (err) {
    res.status(500).send({ message: "Something went wrong" });
    console.log(err);
  }
});
module.exports = app;
