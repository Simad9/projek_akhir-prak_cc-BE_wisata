const express = require("express");
const router = express.Router();

// Routes
const authRoute = require("./authRoutes");
const wisataRoute = require("./wisataRoutes");
const bookmarkRoute = require("./bookmarkRoute");
const komentarRoute = require("./komentarRoute");

// === Halaman Auth ===
router.use("/", authRoute);
router.use("/wisata", wisataRoute);
router.use("/bookmar", bookmarkRoute);
router.use("/komentar", komentarRoute);

module.exports = router;
