import jwt from "jsonwebtoken";
import { ENV } from "../lib/env.js";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

export const checkauth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized(Token only doesn't exist)" });
    }
    const verified_token = jwt.verify(token, ENV.JWT_SECRET);
    if (!verified_token) return res.status(401).json({ message: "Unauthorized - Invalid token" });

    const user = await User.findById(verified_token.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    else {
      req.user=user;
      next();
    }
  }
  catch (error) {
    console.log("Error in checkauth controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};