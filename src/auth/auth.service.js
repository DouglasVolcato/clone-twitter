const User = require("../users/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginService = (email) =>
  User.findOne({ email: email }).select("+password");

const generateToken = (userId) => jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 });

module.exports = { loginService, generateToken };
