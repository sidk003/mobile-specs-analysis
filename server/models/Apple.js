const mongoose = require("mongoose");

const AppleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tagline: { type: String, required: true },
  links: {
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
  },
  bargraph: [],
  table: [],
});

module.exports = mongoose.model("Apple", AppleSchema);
