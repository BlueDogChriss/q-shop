const express = require("express");
const router = express.Router();
const otherRouter = require("./other");
const usersRouter = require("./user");



router.use("/", otherRouter);
router.use("/user", usersRouter);

module.exports = router;