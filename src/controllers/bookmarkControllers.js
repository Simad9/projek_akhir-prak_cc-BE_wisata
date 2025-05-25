const Bookmark = require("../models/bookmarkModels");

const addBookmark = async (req, res) => {
  try {
    const userId = req.userId;
    const wisataId = req.params.id;

    const data = await Bookmark.addBookmark(userId, wisataId);
    res.status(200).json({
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

const deleteBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId; // dummy user id
    console.log(id);
    const data = await Bookmark.deleteBookmark(id, userId);
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

const getBookmark = async (req, res) => {
  try {
    const userId = req.userId;
    const data = await Bookmark.getBookmark(userId);
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

const updateBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId; // dummy user id
    const data = await Bookmark.updateBookmark(id, userId);
    res.status(200).json({
      message: "Data berhasil diupdate",
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
  addBookmark,
  deleteBookmark,
  getBookmark,
  updateBookmark,
};
