import auth from "../models/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  let salt = await bcrypt.genSalt(10);
  let hash = await bcrypt.hash(password, salt);

  const existingUser = await auth.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ msg: "Email Already Registered...... " });
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
};

export { createUser };
