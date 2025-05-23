const express = require("express");
const router = express.Router();

// Middlewares
const verifyToken = require("../middlewares/verifyToken");

// Controllers
const komentarController = require("../controllers/komentarControllers");

// Routes
router.get("/:wisataId", verifyToken, komentarController.getKomentarByWisata);
router.post("/:wisataId", verifyToken, komentarController.addKomentarByWisata);
router.delete(
  "/:komentarId",
  verifyToken,
  komentarController.deleteKomentarByWisata
);
router.put(
  "/:komentarId",
  verifyToken,
  komentarController.updateKomentarByWisata
);

module.exports = router;
