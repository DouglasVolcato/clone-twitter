const User = require("./user");

const findByEmailuserService = async (email) => {
  return await User.findOne({ email: email });
};

const createUserService = async (body) => {
  return await User.create(body);
};

module.exports = { findByEmailuserService, createUserService };
