const express = require("express");
const router = express.Router();
const otherRouter = require("./other");


router.use("/", otherRouter);

module.exports = router;