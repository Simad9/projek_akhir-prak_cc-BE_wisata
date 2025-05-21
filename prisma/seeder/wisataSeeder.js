const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedWisata() {
  const datas = [
    {
      penulisId: 1,
      nama_wisata: "Mount Bromo",
      description:
        "Mount Bromo adalah gunung berapi aktif di Jawa Timur, Indonesia. Gunung ini memiliki ketinggian 2.329 meter di atas permukaan laut dan merupakan gunung tertinggi di Indonesia.",
      imageUrl: "gambar.png",
      lokasi: "Bromo, Jawa Timur, Indonesia",
      harga: 100000,
      tipe: "pegunungan",
      rating: 4.5,
    },
    {
      penulisId: 1,
      nama_wisata: "Tirta Empul",
      description:
        "Tirta Empul adalah sebuah tempat wisata yang terletak di Kabupaten Gianyar, Bali, Indonesia. Tempat ini terkenal dengan air suci yang digunakan untuk berbagai keperluan keagamaan dan ritual.",
      imageUrl: "gambar2.png",
      lokasi: "Gianyar, Bali, Indonesia",
      harga: 50000,
      tipe: "perairan",
      rating: 4.0,
    },
    {
      penulisId: 1,
      nama_wisata: "Museum Nasional Indonesia",
      description:
        "Museum Nasional Indonesia adalah sebuah museum yang terletak di Jakarta, Indonesia. Museum ini terdiri dari beberapa bagian, seperti bagian arkeologi, bagian etnologi, dan bagian sejarah.",
      imageUrl: "gambar3.png",
      lokasi: "Jakarta, Indonesia",
      harga: 0,
      tipe: "budaya",
      rating: 3.5,
    },
    {
      penulisId: 1,
      nama_wisata: "Kuliner Nusantara",
      description:
        "Kuliner Nusantara adalah sebuah tempat wisata yang terletak di Jakarta, Indonesia. Tempat ini terkenal dengan berbagai macam makanan yang berasal dari berbagai daerah di Indonesia.",
      imageUrl: "gambar4.png",
      lokasi: "Jakarta, Indonesia",
      harga: 0,
      tipe: "kuliner",
      rating: 4.0,
    },
    {
      penulisId: 1,
      nama_wisata: "Pantai Parangtritis",
      description:
        "Pantai Parangtritis adalah sebuah tempat wisata yang terletak di Yogyakarta, Indonesia. Tempat ini terkenal dengan keindahan pantainya yang berpasir putih dan berbatu.",
      imageUrl: "gambar5.png",
      lokasi: "Yogyakarta, Indonesia",
      harga: 10000,
      tipe: "perairan",
      rating: 4.5,
    },
  ];

  for (const data of datas) {
    await prisma.wisata.create({
      data: data,
    });
  }

  console.log("Wistata seeded successfully.");
}

module.exports = { seedWisata };
