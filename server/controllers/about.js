const aboutContent = require("../models/aboutContent");

const getAbout = async (req, res) => {
  try {
    const content = await aboutContent.find();

    res.status(200).json(content);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = getAbout;
