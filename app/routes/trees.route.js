const express = require("express");
const controller = require("../controllers/trees.controller");

const router = express.Router();

router.get("/", controller.index);

module.exports = router;