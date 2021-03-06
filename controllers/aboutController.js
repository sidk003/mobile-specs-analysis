const About = require("../models/About");

// @desc    Get data of about-us
// @route   GET /api/v1/
// @access  Public
exports.getAbout = async (req, res, next) => {
  try {
    const about = await About.findOne();
    return res.status(200).json({
      success: true,
      count: about.length,
      data: about,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add data of about-us
// @route   POST /api/v1/
// @access  Public
exports.addAbout = async (req, res, next) => {
  try {
    // const about = await About.create(req.body);
    const query = { title: "About-Us" };
    const replacement = req.body;
    const options = { upsert: true };
    const about = await About.replaceOne(query, replacement, options);

    return res.status(201).json({
      success: true,
      data: about,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (value) => value.message
      );
      res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};
