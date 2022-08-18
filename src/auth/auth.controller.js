const authService = require("./auth.service");

const loginController = async (req, res) => {
  res.send({ message: "Logged in" });
};

module.exports = { loginController };
