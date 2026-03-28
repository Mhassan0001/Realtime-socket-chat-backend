import express from "express";
import {
  getMessage,
  sendMessage,
  createGroupRoom,
  getUserByMobile,
  createPrivateRoom,
} from "../controllers/chat.js";
import { auth, roleBase } from "../middleware/auth.js";
const router = express.Router();

//!==========================================

router.route("/getUserByMobile/:mobile").get(auth, getUserByMobile);
router.route("/getMessages/:roomId").get(auth, getMessage);
router.route("/send").post(auth, sendMessage);
router.route("/createRoom").post(auth, createGroupRoom);
router.route("/createPrivateRoom").post(auth, createPrivateRoom);

//!==========================================

export default router;
