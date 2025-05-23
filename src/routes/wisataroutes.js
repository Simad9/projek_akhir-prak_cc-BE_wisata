const express = require("express");
const router = express.Router();
const multer = require("multer");

// Middlewares
const upload = multer({ dest: "uploads/" }); // folder penyimpanan file
const verifyToken = require("../middlewares/verifyToken");

// Controllers
const wisataController = require("../controllers/wisataControllers");

// == Halaman ==
// Page : Homepage
router.get("/", verifyToken, wisataController.homepage);
router.get("/:id", verifyToken, wisataController.detail);
router.post(
  "/",
  verifyToken,
  upload.single("foto_wisata"),
  wisataController.createWisata
);
router.put(
  "/:id",
  verifyToken,
  upload.single("foto_wisata"),
  wisataController.updateWisata
);
router.delete("/:id", verifyToken, wisataController.deleteWisata);

module.exports = router;
