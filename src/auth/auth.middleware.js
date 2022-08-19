require("dotenv").config;
const jwt = require("jsonwebtoken");
const { findByIdUserService } = require("../users/users.service");

module.exports = (req, res, next) => {
  const authHeader = req.headers.autorization;

  if (!authHeader) {
    return res.status(401).send({ message: "The token was not informed." });
  }

  const parts = authHeader.split(" "); /*   [Bearer, ajhsgjhagsdf234fgf] */

  if (parts.length !== 2) {
    return res.status(401).send({ message: "Invalid token" });
  }
  const [scheme, token] = parts;

  if (!/^Bearer^/i.test(scheme)) {
    return res.status(401).send({ message: "Invalid token" });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    const user = await findByIdUserService(decoded.id);

    if (err || !user || !user.id) {
      return res.status(401).send({ message: "Invalid token" });
    }

    req.userId = user.id;

    return next();
  });
};
