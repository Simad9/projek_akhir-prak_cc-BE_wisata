const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const register = async (data) => {
  const result = await prisma.user.create({ data: data });
  return result;
};

const usernameOrEmailExists = async (username, email) => {
  const result = await prisma.user.findFirst({
    where: {
      OR: [{ username: username }, { email: email }],
    },
  });
  return result;
};

const updateById = async (id, data) => {
  const result = await prisma.user.update({
    where: {
      id_user: id,
    },
    data: data,
  });
  return result;
};

const byRefreshToken = async (refreshToken) => {
  const result = await prisma.user.findFirst({
    where: {
      refresh_token: refreshToken,
    },
  });
  return result;
};

module.exports = {
  register,
  usernameOrEmailExists,
  updateById,
  byRefreshToken,
};
