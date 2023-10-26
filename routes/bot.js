const sendData = require("../controllers/sendData");

const express = require("express");

const router = express.Router();

router.post("/sendData", sendData);

module.exports = router;
