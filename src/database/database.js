const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Connecting to database");

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected!");
    })
    .catch((err) => console.log(`Connection error: ${err}`));
};

module.exports = connectDatabase;
