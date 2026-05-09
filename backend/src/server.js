require("dotenv").config();

const http = require("http");
const app = require("./app");
const connectDB = require("./config/db");
const initializeSocket = require("./socket/socket");

connectDB();

const server = http.createServer(app);

const io = initializeSocket(server);
app.set("io", io);

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
