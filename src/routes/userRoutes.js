const express = require("express");
const router = express.Router();

// Middlewares
const verifyToken = require("../middlewares/verifyToken");

// Controller
const userControllers = require("../controllers/userControllers");

// Routes
router.get("/:id", verifyToken, userControllers.getUserById);
router.post("/", verifyToken, userControllers.createUser);
router.put("/:id", verifyToken, userControllers.updateUserById);
router.delete("/:id", verifyToken, userControllers.deleteUserById);

module.exports = router;
