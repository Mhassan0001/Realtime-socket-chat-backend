import express from "express";
import { createAdmin, createUser, login } from "../controllers/auth.js";
import { auth, roleBase } from "../middleware/auth.js";
const router = express.Router();
//!==========================================

router.route("/createAdmin").post(auth, roleBase("admin"), createAdmin);
router.route("/create").post(createUser);
router.route("/login").post(login);

//!==========================================
export default router;
