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

module.exports = { getAllWisata, getWisataByQuery };
