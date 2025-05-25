const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUserById = async (id) => {
  const result = await prisma.user.findUnique({
    where: {
      id_user: Number(id),
    },
  });
  return result;
};

const createUser = async (data) => {
  const result = await prisma.user.create({ data: data });
  return result;
};

const updateUserById = async (id, data) => {
  const result = await prisma.user.update({
    where: {
      id_user: Number(id),
    },
    data: data,
  });
  return result;
};

const deleteUserById = async (id) => {
  const result = await prisma.user.delete({
    where: {
      id_user: Number(id),
    },
  });
  return result;
};

module.exports = {
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
