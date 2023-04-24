const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

const register = async (req, res) => {
      const { email, username, password } = req.body;
      
      console.log(email,username,password)
      const existingUser = await User.findOne({ email: email });
      console.log(existingUser)
      if (existingUser != null) {
        return res.status(400).send("User already exists.");
      }

      console.log("1")
      const user = new User({ email: email, username: username, password: password });
      console.log("2")
      await user.save();
      console.log("3")
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      console.log("4")
      res.status(201).send({ token });
      console.log("5")
  };
  
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
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
