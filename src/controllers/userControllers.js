const User = require("../models/userModels");
const bycrypt = require("bcrypt");

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await User.getUserById(id);
    if (!data) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    res.status(200).json({
      message: "Data user ditemukan",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const createUser = async (req, res) => {
  const { username, email, password, confirm_password } = req.body;

  // Password Validation
  if (password != confirm_password)
    return res.status(400).json({ message: "Password tidak cocok" });

  // Hash Passowrd
  const salt = await bycrypt.genSalt();
  const hashPassword = await bycrypt.hash(password, salt);

  const dataForm = {
    username,
    email,
    password: hashPassword,
  };

  try {
    const data = await User.createUser(dataForm);
    res.status(200).json({
      message: "Register Berhasil",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, confirm_password } = req.body;

  // Password Validation
  if (password != confirm_password)
    return res.status(400).json({ message: "Password tidak cocok" });

  // Hash Passowrd
  const salt = await bycrypt.genSalt();
  const hashPassword = await bycrypt.hash(password, salt);

  const dataForm = {
    username,
    email,
    password: hashPassword,
  };

  try {
    const data = await User.updateUserById(id, dataForm);
    res.status(200).json({
      message: "Update Berhasil",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await User.deleteUserById(id);
    res.status(200).json({
      message: "Hapus Berhasil",
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
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
