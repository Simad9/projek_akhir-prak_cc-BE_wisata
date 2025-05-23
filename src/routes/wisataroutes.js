const express = require("express");
const router = express.Router();
const multer = require("multer");

// Middlewares
const upload = multer({ dest: "uploads/" }); // folder penyimpanan file

// Controllers
const wisataController = require("../controllers/wisataControllers");

// == Halaman ==
// Page : Homepage
router.get("/", wisataController.homepage);
router.get("/:id", wisataController.detail);
router.post("/", upload.single("foto_wisata"), wisataController.createWisata);
router.put("/:id", upload.single("foto_wisata"), wisataController.updateWisata);
router.delete("/:id", wisataController.deleteWisata);

module.exports = router;
