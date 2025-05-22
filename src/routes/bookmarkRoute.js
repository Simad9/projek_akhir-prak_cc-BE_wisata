const express = require("express");
const router = express.Router();

// Bookmark
const bookmarkController = require("../controllers/bookmarkControllers");

router.get("/bookmark", bookmarkController.getBookmark);
router.post("/bookmark/:id", bookmarkController.addBookmark);
router.delete("/bookmark/:id", bookmarkController.deleteBookmark);

module.exports = router;
