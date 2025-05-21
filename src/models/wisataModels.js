const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllWisata = async () => {
  const result = await prisma.wisata.findMany({
    orderBy: {
      id_wisata: "desc",
    },
  });
  return result;
};

module.exports = { getAllWisata };
