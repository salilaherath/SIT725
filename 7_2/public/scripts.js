const socket = io();

socket.on("connect", () => {
  console.log("Connected to server");
});

const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send");
const messageList = document.getElementById("messages");

// Send message to the server
sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message) {
    socket.emit("message", message);
    messageInput.value = "";
  }
});

// Receive messages from the server
socket.on("message", (data) => {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = data.text;
  messageDiv.className =
    data.sender === socket.id ? "message own-message" : "message other-message";
  messageList.appendChild(messageDiv);
});
