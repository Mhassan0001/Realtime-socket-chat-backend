import express from "express";
import { createUser } from "../controllers/auth.js";
const router = express.Router;

router.route("/create", createUser);

export default router;
