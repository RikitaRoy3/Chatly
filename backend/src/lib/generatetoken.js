import jwt from "jsonwebtoken";
import { ENV } from "./env_file.js";


export const generateToken = (userId, res) => {
  const  {JWT_SECRET}  = ENV;
  if (!JWT_SECRET) {
    throw new Error("sorry please configure your JWT_SECRET");
  }

  const t = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "1hrs",
  });

  res.cookie("jwt", t, {
    maxAge: 1 * 60 * 60 * 1000, // 1 hrs
    httpOnly: true, // prevent XSS attacks: cross-site scripting
    sameSite: "strict", // CSRF attacks
    secure: ENV.NODE_ENV === "development" ? false : true,
  });

  return token;
};