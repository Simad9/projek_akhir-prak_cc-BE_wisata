const Komentar = require("../models/komentarModels");

const getKomentarByWisata = async (req, res) => {
  try {
    const wisataId = req.params.wisataId;
    console.log(wisataId);

    const result = await Komentar.getKomentarByWisata(wisataId);
    res.status(200).json({
      status: "success",
      message: "Berhasil mendapatkan data komentar",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const addKomentarByWisata = async (req, res) => {
  try {
    const wisataId = req.params.wisataId;
    // const userId = req.user.id_user;
    const userId = 1; // For testing purposes, replace with req.user.id_user in production

    const dataForm = {
      userId,
      wisataId: parseInt(wisataId),
      isi_komentar: req.body.komentar,
    };

    console.log(dataForm);

    const result = await Komentar.addKomentarByWisata(dataForm);
    res.status(200).json({
      status: "success",
      message: "Berhasil menambahkan data komentar",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteKomentarByWisata = async (req, res) => {
  try {
    const komentarId = req.params.komentarId;
    // const userId = req.user.id_user;
    const userId = 1; // For testing purposes, replace with req.user.id_user in production

    const result = await Komentar.deleteKomentarByWisata(komentarId, userId);
    res.status(200).json({
      status: "success",
      message: "Berhasil menghapus data komentar",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const updateKomentarByWisata = async (req, res) => {
  try {
    const komentarId = req.params.komentarId;
    // const userId = req.user.id_user;
    const userId = 1; // For testing purposes, replace with req.user.id_user in production

    const dataForm = {
      isi_komentar: req.body.komentar,
    };

    const result = await Komentar.updateKomentarByWisata(
      komentarId,
      userId,
      dataForm
    );
    res.status(200).json({
      status: "success",
      message: "Berhasil memperbarui data komentar",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  getKomentarByWisata,
  addKomentarByWisata,
  deleteKomentarByWisata,
  updateKomentarByWisata,
};
