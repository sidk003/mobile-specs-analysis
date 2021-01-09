const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  links: {
    google: { type: String, required: true },
    onePlus: { type: String, required: true },
    iphone: { type: String, required: true },
    huawei: { type: String, required: true },
    samsung: { type: String, required: true },
    xiaomi: { type: String, required: true },
  },
  sidebarCompany: {
    first: { type: String, required: true },
    second: { type: String, required: true },
    third: { type: String, required: true },
    fourth: { type: String, required: true },
    fifth: { type: String, required: true },
    sixth: { type: String, required: true },
  },
});

module.exports = mongoose.model("About", AboutSchema);
