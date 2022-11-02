const express = require("express");
const app = express();
// const path = require("path");
// const authRoutes = require("./routes/authRoutes");
// const connectDB = require('./config/db');
// const mongoose = require("mongoose");

const PORT = 5432;

// connectDB();


app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}, you better catch it!`);
});
