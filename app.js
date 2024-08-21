const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => console.log("DB Okay"))
  .catch(() => console.log("DB Failed"));
