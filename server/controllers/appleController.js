const Apple = require("../models/Apple");

// @desc    Get data of Apple
// @route   GET /api/v1/apple
// @access  Public
exports.getApple = async (req, res, next) => {
  try {
    const apple = await Apple.findOne();
    return res.status(200).json({
      success: true,
      count: apple.length,
      data: apple,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add data to Apple
// @route   POST /api/v1/apple
// @access  Public
exports.addApple = async (req, res, next) => {
  try {
    const query = { title: "Apple" };
    const replacement = req.body;
    const options = { upsert: true };
    const apple = await Apple.replaceOne(query, replacement, options);

    return res.status(201).json({
      success: true,
      data: apple,
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
