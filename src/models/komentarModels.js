const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getKomentarByWisata = async (wisataId) => {
  const result = await prisma.komentar.findMany({
    where: {
      wisata_id: wisataId,
    },
    include: {
      user: {
        select: {
          id_user: true,
          username: true,
          email: true,
        },
      },
    },
  });
  return result;
};

const addKomentarByWisata = async (data) => {
  const result = await prisma.komentar.create({ data });
  return result;
};

const deleteKomentarByWisata = async (komentarId, userId) => {
  const result = await prisma.komentar.delete({
    where: {
      id_komentar: Number(komentarId),
      userId: userId,
    },
  });
  return result;
};

const updateKomentarByWisata = async (komentarId, userId, data) => {
  const result = await prisma.komentar.update({
    where: {
      id_komentar: Number(komentarId),
      userId: userId,
    },
    data,
  });
  return result;
}

module.exports = {
  getKomentarByWisata,
  addKomentarByWisata,
  deleteKomentarByWisata,
  updateKomentarByWisata
};
