const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedUsers() {
  const users = [
    {
      username: "Jhon Doe",
      username: "Jhondoe123",
      email: "jhondoe123@example.com",
      password: "Jhondoe123",
    },   
    {
      username: "Wijdan",
      username: "Wijdan123",
      email: "Wijdan123@example.com",
      password: "Wijdan123",
    },   
    {
      username: "Akbar",
      username: "Akbar123",
      email: "Akbar123@example.com",
      password: "Akbar123",
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
