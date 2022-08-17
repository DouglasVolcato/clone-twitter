require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDatabase = require("./database/database");

const port = process.env.PORT || 3001;
const app = express();

connectDatabase();
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Hello Word!" });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
  console.log("http://localhost:3001");
});
