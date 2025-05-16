const express = require("express");
const router = express.Router();

// Controllers
const authController = require("../controllers/authControllers");

// == Halaman ==
// Page : Login
router.post("/login", authController.login);
// Page : Register
router.post("/register", authController.register);

// == Kegunaan ==
// Untuk : Refresh Token
router.get("/token", authController.refreshToken);
// Untuk : Logout
router.delete("/logout", authController.logout);

module.exports = router;
