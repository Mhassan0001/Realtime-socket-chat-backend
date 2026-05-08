import AppError from "../utils/appError.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Chat from "../models/chat.js";
import Room from "../models/room.js";
import User from "../models/auth.js";

//? ==============================================

const getUserByMobile = asyncHandler(async (req, res) => {
  const { mobile } = req.params;

  if (!mobile) {
    throw new AppError("Mobile No is Required", 400);
  }

  const user = await User.find({
    mobile: { $regex: mobile, $options: "i" },
  }).select("_id firstName lastName email mobile");

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

//? ==============================================

const createPrivateRoom = asyncHandler(async (req, res) => {
  const { member } = req.body;
  const userId = req.user.userId;

  if (!member || member.length != 1) {
    throw new AppError("Only One User Allowed", 400);
  }

  const members = [userId, member[0]];
  const existingRoom = await Room.findOne({
    member: { $all: members, $size: 2 },
  });

  if (existingRoom) {
    return res.status(200).json({
      success: true,
      data: existingRoom,
    });
  }

  const room = await Room.create({ member: members });
  res.status(201).json({
    success: true,
    data: room,
  });
});

//? ==============================================

const createGroupRoom = asyncHandler(async (req, res) => {
  const { member } = req.body;
  const userId = req.user.userId;
  if (!member || member.length < 1)
    throw new AppError("Members are required to create a room", 400);

  if (!member.includes(userId)) {
    member.push(userId);
  }

  const existingRoom = await Room.findOne({
    member: { $all: member, $size: member.length },
  });

  if (existingRoom) {
    return res.status(200).json({
      success: true,
      data: existingRoom,
      message: "Room already exists",
    });
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

  if (!room.member.includes(senderId)) {
    throw new AppError("Not authorized to send message in this room", 403);
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
  const { roomId } = req.params;
  const senderId = req.user.userId;

  const room = await Room.findById(roomId);
  if (!room) {
    throw new AppError("Room not found", 404);
  }

  if (!room.member.includes(senderId)) {
    throw new AppError("Not Authorized to view messages", 403);
  }

  const message = await Chat.find({ roomId })
    .populate("senderId", "name email")
    .sort({ createdAt: 1 });

  res.status(200).json({ success: true, data: message });
});

//! ==============================================

export {
  sendMessage,
  getMessage,
  createGroupRoom,
  getUserByMobile,
  createPrivateRoom,
};
