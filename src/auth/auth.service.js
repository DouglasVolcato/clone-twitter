const User = require("../users/user");

const loginService = (email) => User.findOne({ email: email }).select("+password");

module.exports = { loginService };
