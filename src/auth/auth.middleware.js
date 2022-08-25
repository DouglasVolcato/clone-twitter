require("dotenv").config();
const jwt = require("jsonwebtoken");
const { findByIdUserService } = require("../users/users.service");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: "O token não foi informado!" });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).send({ message: "Token inválido!" });
  }

  const [scheme, token] = parts;

  // console.log(token)

  if (!/Bearer/i.test(scheme)) {
    return res.status(401).send({ message: "Token malformatado!" });
  }

  jwt.verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDY1NzcyZWEyNTU3MzIxYmYwOGYwYSIsImlhdCI6MTY2MTM1OTk4NywiZXhwIjoxNjYxNDQ2Mzg3fQ.dg-RXyTCHq8vrbcSe0a2WfpOCLGgmtzzYgIeb98G6nk",
    process.env.SECRET,
    async (err, decoded) => {

      const user = await findByIdUserService(decoded.id);
      // console.log(user);

      if (err || !user || !user._id) {
        return res.status(401).send({ message: "Token inválido!" });
      }

      // console.log(user);

      req.userId = user._id;

      return next();
    }
  );
};
