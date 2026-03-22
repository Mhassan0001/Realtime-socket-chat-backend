import AppError from "../utils/appError.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Chat from "../models/chat.js";
import Room from "../models/room.js";
//? ==============================================

const createRoom = asyncHandler(async (req, res) => {
  const member = req.body;
  const userId = req.user.userId;
  if (!member || member.length < 1)
    throw new Error("Members are required to create a room", 400);

  if (!member.includes(userId)) {
    member.push(userId);
  }

  const room = await Room.create({ member });
  res.status(201).json({
    success: true,
    data: room,
  });
});

//? ==============================================

const sendMessage = asyncHandler(async (req, res) => {
  const { roomId, message } = req.body;
  const senderId = req.user.userId;

  const room = await Room.findById(roomId);
  if (!room) {
    throw new AppError("Room not found", 404);
  }

  const chat = await Chat.create({
    roomId,
    senderId,
    message,
  });

  res.status(201).json({
    success: true,
    data: chat,
  });
});

//? ==============================================

const getMessage = asyncHandler(async (req, res) => {
  const { roomId } = req.body;

  const room = await Room.findById(roomId);
  if (!room) {
    throw new AppError("Room not found", 404);
  }

  const message = await Chat.find({ roomId })
    .populate("senderId", "name email")
    .sort({ createdAt: 1 });

  res.status(200).json({ success: true, data: message });
});

//! ==============================================

export { sendMessage, getMessage, createRoom };
