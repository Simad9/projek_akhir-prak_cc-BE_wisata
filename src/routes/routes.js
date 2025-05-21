const express = require("express");
const router = express.Router();

// Routes
const authRoute = require("./authRoutes");
const wisataRoute = require("./wisataroutes");

// === Halaman Auth ===
router.use("/", authRoute);
router.use("/", wisataRoute);

module.exports = router;
