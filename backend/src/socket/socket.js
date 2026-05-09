const { Server } = require("socket.io");

const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL,
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  return io;
};

module.exports = initializeSocket;