require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");

const app = express();

// Middleware to handle CORS 

app.use(
    cors({
        origin: process.env.CLIENT_URL || "*", 
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());

connectDB(); 

app.use("/api/v1/auth", authRoutes);
app.use ("/api/v1/income", incomeRoutes);

// Routes for productivity logs and study locations
app.use("/api/v1/logs", require("./routes/logRoutes"));
app.use("/api/v1/locations", require("./routes/locationRoutes"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

