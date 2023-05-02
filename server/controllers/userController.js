const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const register = async (req, res) => {
  try {
    const { email, username, password, usertype } = req.body;
    const existingUser = await User.findOne({ email: email });
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
    const token = jwt.sign({ _id: user._id,usertype:user.usertype }, process.env.JWT_SECRET);
    const userid = user._id;
    res.send({ token,userType,userid });
  } catch (error) {
    res.status(500).send("Internal server error.");
  }
};

const allUsers = async (requete, reponse, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return next(
      new HttpErreur(
        "Erreur lors de la récupération de la liste des profs",
        500
      )
    );
  }
  if (!users) {
    return next(new HttpErreur("Aucun prof trouvé", 404));
  }
  reponse.json({
    users: users.map((user) => user.toObject({ getters: true })),
  });
};


exports.register = register;
exports.login = login;
exports.allUsers = allUsers;
