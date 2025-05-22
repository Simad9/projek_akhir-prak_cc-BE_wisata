const express = require("express");
const router = express.Router();

// Routes
const authRoute = require("./authRoutes");
const wisataRoute = require("./wisataroutes");

// === Halaman Auth ===
router.use("/", authRoute);
router.use("/wisata", wisataRoute);

// Bookmark
const bookmarkController = require("../controllers/bookmarkControllers");
router.get("/bookmark", bookmarkController.getBookmark);
router.post("/bookmark/:id", bookmarkController.addBookmark);
router.delete("/bookmark/:id", bookmarkController.deleteBookmark);

module.exports = router;
