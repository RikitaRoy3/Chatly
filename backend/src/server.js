import express from "express";
import dotenv from "dotenv";
import user_route from "./routes/user.route.js";
import message_route from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT||5000;


app.use("api/routes",user_route );
app.use("api/messages",message_route );


app.listen(PORT, () => {
  console.log("Server is running on port 3000");
  connectDB();
});