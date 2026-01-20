import mongoose from "mongoose";
import { ENV } from "./env_file.js";

export const connectDB = async () => {
  try {
    const  MONGO_URI = ENV.MONGODB_URI;
    if (!MONGO_URI) throw new Error("Sorry, please set your MONGO_URI first.");


    
    // Check if MongoDB URL format looks valid
    if (
      !MONGO_URI.startsWith("mongodb://") &&
      !MONGO_URI.startsWith("mongodb+srv://")
    ) {
      throw new Error("Invalid MongoDB URL format. Please fix your MONGO_URI.");
    }

    
    const conn = await mongoose.connect(MONGO_URI);
    console.log("MONGODB CONNECTED:", conn.connection.host);
  } catch (error) {
    console.error("Error connection to MONGODB:", error);
    process.exit(1); // 1 status code means fail, 0 means success
  }
};
