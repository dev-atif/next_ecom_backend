const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URl)
  .then(() => {
    console.log("MongoDB connected----->");
  })
  .catch((err) => {
    console.log("Mongodb Not connected--->", err.message);
  });
