const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

async function seedUsers() {
  const users = [
    {
      username: "Jhondoe123",
      email: "4Tm6r@example.com",
      password: bcrypt.hashSync("Jhondoe123", 5),
    },
    {
      username: "Wijdan123",
      email: "asdas@example.com",
      password: bcrypt.hashSync("Wijdan123", 5),
    },
    {
      username: "Akbar123",
      email: "123asd@example.com",
      password: bcrypt.hashSync("Akbar123", 5),
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("Users seeded successfully.");
}

module.exports = { seedUsers };
