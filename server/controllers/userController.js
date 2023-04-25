const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async (req, res) => {
  try {
    const { email, username, password, usertype } = req.body;
    const existingUser = await User.findOne({ email: email });
    console.log(existingUser)
    if (existingUser != null) {
      return res.status(400).send("User already exists.");
    }
    const user = new User({
      email: email,
      username: username,
      password: password,
      usertype: usertype,
    });
    await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.status(201).send({ token });
  } catch (error) {
    res.status(500).send("Internal server error.");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send("Invalid credentials.");
    }
    const userType = await user.usertype;
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.send({ token,userType });
  } catch (error) {
    res.status(500).send("Internal server error.");
  }
};

exports.register = register;
exports.login = login;
