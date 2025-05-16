const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

async function seedUsers() {
  const users = [
    {
      username: "Jhon Doe",
      username: "Jhondoe123",
      email: "jhondoe123@example.com",
      password: bcrypt.hashSync("Jhondoe123", salt),
    },
    {
      username: "Wijdan",
      username: "Wijdan123",
      email: "Wijdan123@example.com",
      password: bcrypt.hashSync("Wijdan123", salt),
    },
    {
      username: "Akbar",
      username: "Akbar123",
      email: "Akbar123@example.com",
      password: bcrypt.hashSync("Akbar123", salt),
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
