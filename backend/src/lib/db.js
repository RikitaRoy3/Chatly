import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const  MONGO_URI = process.env.MONGODB_URI;
    if (!MONGO_URI) throw new Error("Sorry, please set your MONGO_URI first.");

    const conn = await mongoose.connect(MONGO_URI);
    console.log("MONGODB CONNECTED:", conn.connection.host);
  } catch (error) {
    console.error("Error connection to MONGODB:", error);
    process.exit(1); // 1 status code means fail, 0 means success
  }
};
