const express = require("express");
const router = express.Router();

// Controllers
const wisataController = require("../controllers/wisataControllers");

// == Halaman ==
// Page : Homepage
router.get("/", wisataController.homepage);
router.get("/", wisataController.homepage);

module.exports = router;