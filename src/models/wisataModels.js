const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const tigaWisataTerbaik = () => {
  const result = prisma.wisata.findMany({
    take: 3,
    orderBy: {
      rating: "desc",
    },
  });
  return result;
};

module.exports = { tigaWisataTerbaik };
