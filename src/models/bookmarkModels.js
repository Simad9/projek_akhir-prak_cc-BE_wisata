const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addBookmark = async (userId, wisataId) => {
  const result = await prisma.bookmark.create({
    data: {
      userId: Number(userId),
      wisataId: Number(wisataId),
    },
  });
  return result;
};

const deleteBookmark = async (id, userId) => {
  const result = await prisma.bookmark.deleteMany({
    where: {
      AND: [{ userId: Number(userId) }, { id_bookmark: Number(id) }],
    },
  });
  return result;
};

const getBookmark = async (userId) => {
  const result = await prisma.bookmark.findMany({
    where: {
      userId: Number(userId),
    },
    include: {
      wisata: {
        select: {
          id_wisata: true,
          foto_wisata: true,
          nama_wisata: true,
        },
      },
    },
    orderBy: {
      id_bookmark: "desc",
    },
  });
  return result;
};

const updateBookmark = async (id, userId) => {
  const result = await prisma.bookmark.update({
    where: {
      id_bookmark: Number(id),
    },
    data: {
      userId: Number(userId),
    },
  });
  return result;
};

module.exports = {
  addBookmark,
  deleteBookmark,
  getBookmark,
  updateBookmark,
};
