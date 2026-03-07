import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler.js";
import authRouter from "../src/routes/auth.js";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
const CLIENT_URL = "http://localhost:5173";

//! =================================================

const app = express();
const port = process.env.PORT || 9000;
const server = createServer(app);
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/auth", authRouter);

const io = new Server(server, {
  cors: { origin: CLIENT_URL, credentials: true },
});
app.get("/", (req, res) => {
  res.json({ msg: "Server Running Successfully....." });
});

app.use(errorHandler);

//! =================================================

connectDB()
  .then(() => {
    server.listen(port, () => {
      console.log(`Server & Socket.Io Connected Successfully At ${port} & 
  MongoDB connected ✅........... `);
    });
  })
  .catch((err) => {
    console.error(`MOngo_DB Conection Failed.....${err.message}`);
    process.exit(1);
  });
