import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import morgan from "morgan";
const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ msg: "Server Running Successfully....." });
});

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
