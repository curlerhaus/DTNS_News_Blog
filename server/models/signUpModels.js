const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  password2: String,
});

module.exports = mongoose.model("registration", userSchema);
