require("dotenv").config();
const express = require("express");
const { Users } = require("../userModel/User.model");
const app = express.Router();

// Creating Users

app.post("/users", async (req, res) => {
  const { name, email, bio } = req.body;

  if (!name || !email)
    return res.status(403).send({ message: "Please enter Details" });

  let exsistUser;
  try {
    exsistUser = await Users.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (exsistUser) {
    return res.status(400).json({ message: "User already exit!" });
  }

  const user = new Users({
    name,
    email,
    bio,
  });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }

  return res.status(200).json({ user });
});

// Retrieve a user by id.

app.get("/users/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not Found" });
    }
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

module.exports = app;
