const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  posttitle: { type: String, required: true },
  pic: { type: String },
  postcategory: { type: String, required: true },
  content: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Post", placeSchema);
