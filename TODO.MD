### Teknis Project Akhir :

- [ ] Database yang digunakan harus MySQL (VM/Cloud SQL), dengan minimal tiga tabel, salah satunya wajib untuk autentikasi pengguna (user).\
       = Tabel User, Wisata, Bookmark, Suka, Komentar
- [ ] PaaS yang digunakan harus mencakup App Engine dan Cloud Run untuk penerapan servicenya bebas. Mau App Engine -BE, Cloud run -FE atau sebaliknya boleh\
       = Aman
- [ ] Service setiap tabelnya wajib CRUD\
       = Semoga Aman
- [ ] Tema bebas, terindikasi serupa dan sama resiko ditanggung masing-masing.\
       = Sudah list terlebih dahulu, jika terjadi serupa berarti orang lain bukan kami seharusnya begitu
- [ ] Tech Stack Frontend : Bebas, Tech Stack Backend : Wajib Express, ORM : Bebas\
       = Tech Stack Frontend = React + TailwindCSS, Tech Stack Backend = Express + ORM Prisma
- [ ] Dokumentasi API\
       = https://documenter.getpostman.com/view/30150423/2sB2qZENJW dokumentasi akan ada disitu

### Catatan Branch Developer

Nanti main untuk CI/CD nya, dev kalo misal ada perubahan, nanti tinggal di push.

### Catatan untuk DB di VM

```
ALTER USER 'admin'@'%' IDENTIFIED BY 'projekakhir'; GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' WITH GRANT OPTION; FLUSH PRIVILEGES;
```

Buat ganti password di db vm nya
