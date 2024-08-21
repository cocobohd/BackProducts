const mongoose = require("mongoose");

const { DB_HOST } = require(process.env);

mongoose
  .connect(DB_HOST)
  .then(() => console.log("DB Okay"))
  .catch(() => console.log("DB Failed"));
