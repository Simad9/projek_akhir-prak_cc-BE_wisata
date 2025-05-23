const Wisata = require("../models/wisataModels");
const validasiUploadImage = require("../utils/validasiUploadImage");

const homepage = async (req, res) => {
  try {
    const query = req.query;
    const { rating: ratingFloat, kategori } = query;
    const rating = parseFloat(ratingFloat);

    if (rating || kategori) {
      const data = await Wisata.getWisataByQuery(query);
      return res.status(200).json({
        message: "Data berhasil didapatkan",
        data: data,
      });
    } else {
      const data = await Wisata.getAllWisata();
      res.status(200).json({
        message: "Data berhasil didapatkan",
        data: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const detail = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Wisata.getWisataById(id);
    if (!data) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    }
    res.status(200).json({
      message: "Data berhasil didapatkan",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteWisata = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Wisata.deleteWisata(id);
    res.status(200).json({
      message: "Data berhasil dihapus",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const createWisata = async (req, res) => {
  try {
    // const userId = req.user.id;
    const userId = 1; // dummy user id

    const dataForm = {
      userId: userId,
      nama_wisata: req.body.nama_wisata,
      deskripsi_wisata: req.body.deskripsi_wisata,
      rating_wisata: parseFloat(req.body.rating_wisata),
      kategori_wisata: req.body.kategori_wisata,
      lokasi_wisata: req.body.lokasi_wisata,
    };

    dataForm.foto_wisata = await validasiUploadImage(req.file);

    // Query Data
    const data = await Wisata.createWisata(dataForm);
    res.status(201).json({
      message: "Data berhasil ditambahkan",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateWisata = async (req, res) => {
  try {
    const { id } = req.params;
    const dataForm = {
      nama_wisata: req.body.nama_wisata,
      deskripsi_wisata: req.body.deskripsi_wisata,
      rating_wisata: parseFloat(req.body.rating_wisata),
      kategori_wisata: req.body.kategori_wisata,
      lokasi_wisata: req.body.lokasi_wisata,
    };

    if (req.file) {
      dataForm.foto_wisata = await validasiUploadImage(req.file);
    }

    // Query Data
    const data = await Wisata.updateWisata(id, dataForm);
    res.status(200).json({
      message: "Data berhasil diperbarui",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

module.exports = {
  homepage,
  detail,
  deleteWisata,
  createWisata,
  updateWisata,
};
