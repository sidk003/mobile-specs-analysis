const express = require("express");
const router = express.Router();
const { getAbout, addAbout } = require("../controllers/aboutController");

router.route("/").get(getAbout).post(addAbout);

module.exports = router;
