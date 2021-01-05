const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema({
  title: String,
  body: String,
});

const aboutContent = mongoose.model("aboutContent", aboutSchema);
module.exports = aboutContent;
