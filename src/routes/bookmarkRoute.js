const express = require("express");
const router = express.Router();

// Middlewares
const verifyToken = require("../middlewares/verifyToken");

// Bookmark
const bookmarkController = require("../controllers/bookmarkControllers");

router.get("/", verifyToken, bookmarkController.getBookmark);
router.post("/:id", verifyToken, bookmarkController.addBookmark);
router.delete("/:id", verifyToken, bookmarkController.deleteBookmark);

// Gak dipake
router.put("/:id", verifyToken, bookmarkController.updateBookmark);

module.exports = router;
