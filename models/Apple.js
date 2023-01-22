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
      image: { type: String, required: true },
      price: { type: String, required: true },
      date: { type: String, required: true },
      specs: {
        general: [],
        display: [],
        hardware: [],
        camera: [],
        connectivity: [],
        sensors: [],
      },
    },
    twelvepro: {
      title: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: String, required: true },
      date: { type: String, required: true },
      specs: {
        general: [],
        display: [],
        hardware: [],
        camera: [],
        connectivity: [],
        sensors: [],
      },
    },
    eightplus: {
      title: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: String, required: true },
      date: { type: String, required: true },
      specs: {
        general: [],
        display: [],
        hardware: [],
        camera: [],
        connectivity: [],
        sensors: [],
      },
    },
    iphonex: {
      title: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: String, required: true },
      date: { type: String, required: true },
      specs: {
        general: [],
        display: [],
        hardware: [],
        camera: [],
        connectivity: [],
        sensors: [],
      },
    },
  },
});

module.exports = mongoose.model("Apple", AppleSchema);
