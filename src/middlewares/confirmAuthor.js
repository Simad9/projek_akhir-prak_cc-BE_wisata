const confirmAuthor = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const wisata = await prisma.wisata.findFirst({
      where: {
        id_wisata: Number(id),
        userId: userId,
      },
    });

    if (!wisata) {
      return res.status(401).json({
        message: "Anda tidak memiliki akses untuk mengedit wisata ini",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
};
