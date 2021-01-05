const express = require("express");

const getAbout = require("../controllers/about.js");
const getImageLinks = require("../controllers/imageLinks.js");

const router = express.Router();

// router.get("/", getImageLinks);
router.get("/", getAbout);

module.exports = router;
