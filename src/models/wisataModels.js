const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllWisata = async () => {
  const result = await prisma.wisata.findMany({
    select: {
      id_wisata: true,
      foto_wisata: true,
      nama_wisata: true,
    },
    orderBy: {
      id_wisata: "desc",
    },
  });
  return result;
};

const getWisataByQuery = async (query) => {
  const { rating, kategori } = query;
  const where = {};

  if (rating) {
    where.rating_wisata = Number(rating);
  }

  if (kategori) {
    where.kategori_wisata = kategori;
  }

  const result = await prisma.wisata.findMany({
    where,
    orderBy: {
      id_wisata: "desc",
    },
  });
  return result;
};

const getWisataById = async (id) => {
  const result = await prisma.wisata.findUnique({
    where: {
      id_wisata: Number(id),
    },
  });
  return result;
};

const deleteWisata = async (id) => {
  const result = await prisma.wisata.delete({
    where: {
      id_wisata: Number(id),
    },
  });
  return result;
};

const createWisata = async (data) => {
  const result = await prisma.wisata.create({ data: data });
  return result;
};

module.exports = {
  getAllWisata,
  getWisataByQuery,
  getWisataById,
  deleteWisata,
  createWisata,
};
