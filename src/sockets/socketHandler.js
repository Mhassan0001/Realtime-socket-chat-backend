const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // User joins room
    socket.on("joinRoom", (roomId) => {
      socket.join(roomId);
      console.log(`User ${socket.id} joined room: ${roomId}`);
    });

    // Broadcast new message
    socket.on("newMessage", (chat) => {
      io.to(chat.roomId).emit("receiveMessage", chat);
    });

    socket.on("disconnect", () => {

      console.log("User disconnected:", socket.id);

    });
  });
};

export default socketHandler;


// const socketHandler = (io) => {
//   io.on("connection", (socket) => {
//     console.log(`Socket.IO Connected Successfully ${socket.id}..... `);

//     //Room Join
//     socket.on("joinRoom", (roomId) => {
//       socket.join(roomId);
//       console.log(`Socket UserId :${socket.id} and Room ID ${roomId}`);
//     });

//     //chatMessage

//     socket.on("chatMessage", ({ roomId, senderId, message }) => {
//       console.log(
//         `Socket UserId :${senderId.id} and Room ID ${roomId} : ${message}`,
//       );

//       io.to(roomId).emit("newMessage", { senderId, message });
//     });

//     socket.on("disconnect", () => {
//       console.log(`User Disconnected ${socket.id}`);
//     });
//   });
// };

// export default socketHandler;



