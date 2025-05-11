const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static("public"));

// Handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle messages from client
  socket.on("message", (msg) => {
    console.log("Message received:", msg);
    io.emit("message", { text: msg, sender: socket.id }); // Broadcast message with socket id
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start server
http.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
