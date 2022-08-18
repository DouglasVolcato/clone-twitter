const authService = require("./auth.service");
const bcrypt = require("bcryptjs");

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.loginService(email);

  if (!user) {
    res.status(400).send({ message: "User not found" });
  }

  const verifyPassword = await bcrypt.compare(password, user.password);

  if (verifyPassword === false) {
    return res.status(400).send({ message: "Wrong password" });
  }

  const token = authService.generateToken(user._id);

  res.send({ token });
};

module.exports = { loginController };
