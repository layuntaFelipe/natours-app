const express = require("express");
const colors = require('colors');
const dotenv = require("dotenv").config();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

const app = express();

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/tours", require("./routes/toursRoutes"));
app.use("/api/v1/users", require("./routes/usersRoutes"));

app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});
