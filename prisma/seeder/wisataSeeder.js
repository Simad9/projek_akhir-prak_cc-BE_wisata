const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedWisata() {
  const datas = [
    {
      userId: 1,
      foto_wisata:
        "https://labirutour.com/wp-content/uploads/2020/09/Keindahan-Pantai-Kuta-Bali-yang-sanggup-menarik-ribuan-wisatawan-setiap-tahunnya-1.jpg",
      nama_wisata: "Pantai Kuta",
      lokasi_wisata: "Bali, Indonesia",
      kategori_wisata: "perairan",
      deskripsi_wisata:
        "Pantai Kuta adalah salah satu pantai terkenal di Bali, Indonesia. Pantai ini terkenal dengan pasir putihnya yang lembut dan ombak yang cocok untuk berselancar.",
      rating_wisata: 4.5,
    },
    {
      userId: 2,
      foto_wisata:
        "https://upload.wikimedia.org/wikipedia/commons/7/7d/Mount_Bromo_at_sunrise%2C_showing_its_volcanoes_and_Mount_Semeru_%28background%29.jpg",
      nama_wisata: "Gunung Bromo",
      lokasi_wisata: "Jawa Timur, Indonesia",
      kategori_wisata: "pegunungan",
      deskripsi_wisata:
        "Gunung Bromo adalah gunung berapi yang terletak di Jawa Timur, Indonesia. Gunung ini terkenal dengan keindahan alam dan sunrise yang memukau.",
      rating_wisata: 4.7,
    },
    {
      userId: 3,
      foto_wisata:
        "https://asset.kompas.com/crops/vdZhnhd65omILwbPWGk6C_Vdsp0=/0x0:780x520/1200x800/data/photo/2019/09/26/5d8c64544d656.jpg",
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
