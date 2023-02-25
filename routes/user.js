const express = require("express");
const router = express();
const UserController = require("../controllers/auth");
router.post("/register", UserController.createUser);
router.post("/login", UserController.login);
module.exports = router;
