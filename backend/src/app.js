const express = require("express");
const cors = require("cors");

const expertRoutes = require("./routes/expertRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.io = app.get("io");
  next();
});

app.use("/api/experts", expertRoutes);
app.use("/api/bookings", bookingRoutes);

app.use(errorHandler);

module.exports = app;