const mongoose = require("mongoose");

const AppleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tagline: { type: String, required: true },
  links: {
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
  },
  minicard1: {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  minicard2: {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  doughnutchart: {
    entry1: {
      name: { type: String, required: true },
      value: { type: Number, required: true },
    },
    entry2: {
      name: { type: String, required: true },
      value: { type: Number, required: true },
    },
    entry3: {
      name: { type: String, required: true },
      value: { type: Number, required: true },
    },
    entry4: {
      name: { type: String, required: true },
      value: { type: Number, required: true },
    },
    entry5: {
      name: { type: String, required: true },
      value: { type: Number, required: true },
    },
  },
  table: {
    phone1: {
      name: { type: String, required: true },
      date: { type: String, required: true },
      price: { type: Number, required: true },
    },
    phone2: {
      name: { type: String, required: true },
      date: { type: String, required: true },
      price: { type: Number, required: true },
    },
    phone3: {
      name: { type: String, required: true },
      date: { type: String, required: true },
      price: { type: Number, required: true },
    },
    phone4: {
      name: { type: String, required: true },
      date: { type: String, required: true },
      price: { type: Number, required: true },
    },
    phone5: {
      name: { type: String, required: true },
      date: { type: String, required: true },
      price: { type: Number, required: true },
    },
    phone6: {
      name: { type: String, required: true },
      date: { type: String, required: true },
      price: { type: Number, required: true },
    },
    phone7: {
      name: { type: String, required: true },
      date: { type: String, required: true },
      price: { type: Number, required: true },
    },
    phone8: {
      name: { type: String, required: true },
      date: { type: String, required: true },
      price: { type: Number, required: true },
    },
    phone9: {
      name: { type: String, required: true },
      date: { type: String, required: true },
      price: { type: Number, required: true },
    },
    phone10: {
      name: { type: String, required: true },
      date: { type: String, required: true },
      price: { type: Number, required: true },
    },
    phone11: {
      name: { type: String, required: true },
      date: { type: String, required: true },
      price: { type: Number, required: true },
    },
    phone12: {
      name: { type: String, required: true },
      date: { type: String, required: true },
      price: { type: Number, required: true },
    },
    phone13: {
      name: { type: String, required: true },
      date: { type: String, required: true },
      price: { type: Number, required: true },
    },
  },
});

module.exports = mongoose.model("Apple", AppleSchema);
