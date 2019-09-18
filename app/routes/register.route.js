const express = require("express");
const controller = require("../controllers/register.controller");

const router = express.Router();

router.get("/register", controller.register); 

module.exports = router;
