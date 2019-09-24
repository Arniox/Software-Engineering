const express = require("express");
const controller = require("../controllers/trees.controller");

const router = express.Router();

router.get("/trees", controller.trees);

module.exports = router;