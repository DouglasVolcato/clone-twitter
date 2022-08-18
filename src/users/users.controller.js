const userService = require("./users.service");

const createUserController = async (req, res) => {
  const { username, name, email, password, avatar } = req.body;

  if (!username || !name || !email || !password || !avatar) {
    return res.status(400).send({
      message: "Missong field(s) during registration.",
    });
  }

  const foundUser = await userService.findByEmailuserService(email);

  if (foundUser) {
    return res.status(400).send({
      message: "User already exists.",
    });
  }

  const user = await userService.createUserService(req.body).catch((err) => {
    console.log(err.message);
  });

  if (!user) {
    return res.status(400).send({ message: "Error creating user" });
  }

  res.status(201).send(user);
};

const findAllUserController = async (req, res) => {
  const users = await userService.findAllUserService();

  if (users.length === 0) {
    return res.status(400).send({ message: "Database is empty." });
  }
  return res.send(users);
};

module.exports = {
  createUserController,
  findAllUserController,
};
