const mongoose = require("mongoose");

const imageLinksSchema = mongoose.Schema({
  title: String,
  link: String,
});

const imageLinks = mongoose.model("imageLinks", imageLinksSchema);
module.exports = imageLinks;
