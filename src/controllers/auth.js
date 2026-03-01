import auth from "../models/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AppError from "../utils/appError.js";
import asyncHandler from "../middleware/asyncHandler.js";

const createUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  let salt = await bcrypt.genSalt(10);
  let hash = await bcrypt.hash(password, salt);

  const existingUser = await auth.findOne({ email });

  if (existingUser) {
    throw new AppError("Email Already Registered...... ", 400);
  }

  const data = await auth.create({
    firstName,
    lastName,
    email,
    password: hash,
    role: "user",
  });

  const token = jwt.sign(
    {
      _id: data._id,
      firstName: data.firstName,
      role: data.role,
    },
    process.env.JWT_KEY,
  );

  res.setHeader("Authorization", `Bearer ${token}`);
  res.status(201).json({ msg: "User Created Successfully", data, token });
});

export { createUser };
