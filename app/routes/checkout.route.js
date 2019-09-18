const express = require("express");
const controller = require("../controllers/checkout.controller");

const router = express.Router();

router.get("/checkout", controller.checkout);

module.exports = router;
