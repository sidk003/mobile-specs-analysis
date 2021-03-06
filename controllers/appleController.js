const Apple = require("../models/Apple");
var request = require("request");
// const spawn = require("child_process").spawn;

// Calling Tiingo API
const symbol = "aapl";
const columnsRequired = ["open"];
var jsonResponse = "";
var stockData = "";
var requestOptions = {
  url:
    "https://api.tiingo.com/tiingo/daily/" +
    symbol +
    "/prices?startDate=2008-01-01&" +
    `columns=${columnsRequired}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Token dfeeb56a6c0e72a4c31667b48bfb938fc21c8163",
  },
};

request(requestOptions, function (error, response, body) {
  stockData = JSON.parse(body);
  jsonResponse = { stockData };
});

// Calling python script
// var pythonResponse = "";
// var pythonJson = "";
// var pythonStr = "";
// var specs = "";

// const pythonProcess = spawn("python", ["./python/specifications.py"]);
// pythonProcess.stdout.on("data", (data) => {
//   pythonStr = data.toString();
//   pythonJson = JSON.parse(pythonStr);
//   specs = pythonJson.Data;
//   pythonResponse = { specs };
// });

// @desc    Get data of Apple
// @route   GET /api/v1/apple
// @access  Public
exports.getApple = async (req, res, next) => {
  try {
    const apple = await Apple.findOne();
    const mergedResponse = {
      ...apple._doc,
      ...jsonResponse,
    };
    return res.status(200).json({
      success: true,
      count: mergedResponse.length,
      data: mergedResponse,
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
