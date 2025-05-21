const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedWisata() {
  const datas = [
    {
      userId: 1,
      foto_wisata: "gambar.png",
      nama_wisata: "Pantai Kuta",
      lokasi_wisata: "Bali, Indonesia",
      kategori_wisata: "perairan",
      deskripsi_wisata:
        "Pantai Kuta adalah salah satu pantai terkenal di Bali, Indonesia. Pantai ini terkenal dengan pasir putihnya yang lembut dan ombak yang cocok untuk berselancar.",
      rating_wisata: 4.5,
    },
    {
      userId: 2,
      foto_wisata: "gambar2.png",
      nama_wisata: "Gunung Bromo",
      lokasi_wisata: "Jawa Timur, Indonesia",
      kategori_wisata: "pegunungan",
      deskripsi_wisata:
        "Gunung Bromo adalah gunung berapi yang terletak di Jawa Timur, Indonesia. Gunung ini terkenal dengan keindahan alam dan sunrise yang memukau.",
      rating_wisata: 4.7,
    },
    {
      userId: 3,
      foto_wisata: "gambar3.png",
      nama_wisata: "Taman Nasional Komodo",
      lokasi_wisata: "Nusa Tenggara Timur, Indonesia",
      kategori_wisata: "budaya",
      deskripsi_wisata:
        "Taman Nasional Komodo adalah taman nasional yang terletak di Nusa Tenggara Timur, Indonesia. Taman ini terkenal dengan habitat alami dari Komodo, binatang yang paling besar di dunia.",
      rating_wisata: 4.9,
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
