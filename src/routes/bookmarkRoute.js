const express = require("express");
const router = express.Router();

// Middlewares
const verifyToken = require("../middlewares/verifyToken");

// Bookmark
const bookmarkController = require("../controllers/bookmarkControllers");

router.get("/bookmark", verifyToken, bookmarkController.getBookmark);
router.post("/bookmark/:id", verifyToken, bookmarkController.addBookmark);
router.delete("/bookmark/:id", verifyToken, bookmarkController.deleteBookmark);

module.exports = router;
