import express from "express";
import { createUser, login } from "../controllers/auth.js";
const router = express.Router();

router.route("/create").post(createUser);
router.route("/login").post(login);

export default router;
