const express = require("express");
const controller = require("../controllers/trees.controller");

const router = express.Router();

router.get("/", controller.index);
router.post("/addToCart", controller.addToCart);

module.exports = router;