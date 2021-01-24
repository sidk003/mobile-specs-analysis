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
  phonemodels: {
    twelvepromax: {
      title: { type: String, required: true },
      carousel: {
        image1: { type: String, required: true },
        image2: { type: String, required: true },
        image3: { type: String, required: true },
      },
    },
    twelvepro: {
      title: { type: String, required: true },
      carousel: {
        image1: { type: String, required: true },
        image2: { type: String, required: true },
        image3: { type: String, required: true },
      },
    },
  },
});

module.exports = mongoose.model("Apple", AppleSchema);
