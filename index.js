const app = require("./src/app.js");

// Cek dan tampilkan environment variable PORT dan beberapa variabel lain yang relevan
console.log("--- Debugging Environment Variables ---");
console.log("PORT environment variable:", process.env.PORT);
console.log("ACCESS_TOKEN_SECRET:", process.env.ACCESS_TOKEN_SECRET ? "Present" : "Missing");
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Present" : "Missing");


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
