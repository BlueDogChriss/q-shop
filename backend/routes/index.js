const express = require("express");
const router = express.Router();
const otherRouter = require("./other");
const usersRouter = require("./user");



router.use("/", otherRouter);
router.use("/users", usersRouter);

module.exports = router;