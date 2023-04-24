const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

const register = async (req, res) => {
  const { email, username, password } = req.body;

  const existingUser = await User.findOne({ email: email });
  if (existingUser != null) {
    return res.status(400).send("User already exists.");
  }

  const user = new User({
    email: email,
    username: username,
    password: password,
  });
  await user.save();
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.status(201).send({ token });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    console.log(user)
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send("Invalid credentials.");
    }
    
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (error) {
    res.status(500).send("Internal server error.");
  }
};

exports.register = register;
exports.login = login;
