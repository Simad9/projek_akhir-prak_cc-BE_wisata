// src/app.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// App Express
const app = express();

// Dotenv
dotenv.config();

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Routes
const Routes = require("./routes/routes.js");
app.use("/api/", Routes);

// Default route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.get("*", (req, res) => {
  res.send("404 - Halaman tidak ada");
});

module.exports = app;
