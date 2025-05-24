const express = require("express");
const router = express.Router();

// Routes
const authRoute = require("./authRoutes");
const wisataRoute = require("./wisataroutes");
const bookmarkRoute = require("./bookmarkRoute");
const komentarRoute = require("./komentarRoute");

// === Halaman Auth ===
router.use("/", authRoute);
router.use("/wisata", wisataRoute);
router.use("/bookmark", bookmarkRoute);
router.use("/komentar", komentarRoute);

module.exports = router;
