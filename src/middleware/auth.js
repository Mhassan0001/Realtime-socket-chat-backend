import jwt from "jsonwebtoken";
import AppError from "../utils/appError.js";

//!===============================

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("You are not logged in", 401));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return next(new AppError("Token expired. Please login again", 401));
    }
    if (err.name === "JsonWebTokenError") {
      return next(new AppError("Invalid token. Access denied", 401));
    }

    next(new AppError(err.message, 500));
  }
};

//! ===============================

const roleBase = (requiredRole) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new AppError("You are not logged in", 401));
    }

    if (req.user.role !== requiredRole) {
      return next(new AppError("Access Denied. Not authorized", 403));
    }

    next();
  };
};

export { auth, roleBase };
