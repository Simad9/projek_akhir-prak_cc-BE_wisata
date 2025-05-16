// prisma/seed.ts
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// seeder
const { seedUsers } = require("./seeder/usersSeeder.js");

// main
async function main() {
  // Hapus Data
  // await prisma.users.deleteMany();
  // Seeder
  // await seedUsers();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
