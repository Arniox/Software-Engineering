const express = require("express");
const controller = require("../controllers/user.controller");

const router = express.Router();

router.get("/login", controller.showLoginPage);
router.get("/register", controller.showRegisterPage);
router.post("/register", controller.createUser);

module.exports = router;