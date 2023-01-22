const express = require("express");
const router = express.Router();
const { getApple, addApple } = require("../controllers/appleController");

router.route("/").get(getApple).post(addApple);

module.exports = router;
