const User = require("./user");

const findByEmailuserService = async (email) => {
  return await User.findOne({ email: email });
};

const createUserService = async (body) => {
  return await User.create(body);
};

const findAllUserService = async () => {
  return await User.find();
};

const findByIdUserService = (idUser) => User.findById(idUser);

module.exports = {
  findByEmailuserService,
  createUserService,
  findAllUserService,
  findByIdUserService,
};
