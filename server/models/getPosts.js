const mongoose = require("mongoose");

// create an schema
const dataSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
});

// var dataModel = mongoose.model("data", dataSchema);

module.exports = mongoose.model("data", dataSchema);
