import express from "express";
import { getMessage, sendMessage } from "../controllers/chat.js";
import { auth, roleBase } from "../middleware/auth.js";
const router = express.Router();
//!==========================================

router.route("/room/:id").get(auth, getMessage);
router.route("/send").post(auth, sendMessage);

//!==========================================
export default router;
