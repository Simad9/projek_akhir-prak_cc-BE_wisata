const app = require("./src/app.js");
const PORT = process.env.PORT || 8080;

try {
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Error: Apache server is not running.", error);
}

