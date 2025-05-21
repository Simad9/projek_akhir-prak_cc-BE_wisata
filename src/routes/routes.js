const express = require("express");
const router = express.Router();

// Routes
const authRoute = require("./authRoutes");
const wisataRoute = require("./wisataroutes");

// === Halaman Auth ===
router.use("/", authRoute);
router.use("/", wisataRoute);

// // Controllers
// const wisataController = require("../controllers/wisataControllers");
// const authController = require("../controllers/authControllers");

// // == Halaman ==
// // Page : Homepage
// router.get("/", wisataController.homepage);

// // == Halaman ==
// // Page : Login
// router.post("/login", authController.login);
// // Page : Register
// router.post("/register", authController.register);
// // == Kegunaan ==
// // Untuk : Refresh Token
// router.get("/token", authController.refreshToken);
// // Untuk : Logout
// router.delete("/logout", authController.logout);

module.exports = router;
