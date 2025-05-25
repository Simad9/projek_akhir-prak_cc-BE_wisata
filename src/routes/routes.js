const express = require("express");
const router = express.Router();

// Routes
const authRoute = require("./authRoutes");
const wisataRoute = require("./wisataroutes");
const bookmarkRoute = require("./bookmarkRoute");
const komentarRoute = require("./komentarRoute");
const userRoute = require("./userRoutes");

// === Halaman Auth ===
router.use("/", authRoute);
router.use("/wisata", wisataRoute);
router.use("/bookmark", bookmarkRoute);
router.use("/komentar", komentarRoute);

// Gak dipake
router.use("/user", userRoute);

module.exports = router;
