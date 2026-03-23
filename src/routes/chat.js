import express from "express";
import { getMessage, sendMessage, createRoom } from "../controllers/chat.js";
import { auth, roleBase } from "../middleware/auth.js";
const router = express.Router();
//!==========================================

router.route("/room/:id").get(auth, getMessage);
router.route("/send").post(auth, sendMessage);
router.route("/createRoom").post(auth, createRoom);

//!==========================================
export default router;
