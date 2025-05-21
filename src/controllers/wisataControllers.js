const Wisata = require("../models/wisataModels");

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

module.exports = { homepage };
