const express = require("express");
const router = express.Router();

// Routes
const authRoute = require("./authRoutes");

// === Halaman Auth ===
router.use("/", authRoute);

module.exports = router;
