const express = require("express");
const router = express.Router();

// Controllers
const komentarController = require("../controllers/komentarControllers");

// Routes
router.get("/:wisataId", komentarController.getKomentarByWisata);
router.post("/:wisataId", komentarController.addKomentarByWisata);
router.delete("/:komentarId", komentarController.deleteKomentarByWisata);
router.put("/:komentarId", komentarController.updateKomentarByWisata);

module.exports = router;
