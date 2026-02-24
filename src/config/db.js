import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let uri = process.env.MONGO_URI;
let connectDB = () => {
  return mongoose.connect(uri);
};

export default connectDB;
