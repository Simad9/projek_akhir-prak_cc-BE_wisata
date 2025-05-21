// prisma/seed.ts
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// seeder
const { seedUsers } = require("./seeder/usersSeeder.js");
const { seedWisata } = require("./seeder/wisataSeeder.js");

// main
async function main() {
  // Hapus Data
  // await prisma.user.deleteMany();
  // await prisma.wisata.deleteMany();
  // Seeder
  // await seedUsers();
  // await seedWisata();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
