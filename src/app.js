import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler.js";
import authRouter from "../src/routes/auth.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 9000;
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/auth", authRouter);
app.get("/", (req, res) => {
  res.json({ msg: "Server Running Successfully....." });
});

app.use(errorHandler);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Connected Successfully At ${port} & 
  MongoDB connected ✅........... `);
    });
  })
  .catch((err) => {
    console.error(`MOngo_DB Conection Failed.....${err.message}`);
    process.exit(1);
  });
