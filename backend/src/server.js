import express from "express";
import dotenv from "dotenv";
import user_route from "./routes/user.route.js";
import message_route from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env_file.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { app } from "./lib/socket.js";


dotenv.config();

const __dirname = path.resolve();



app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(cors({origin: ENV.CLIENT_URL, credentials: true}));// This will allow frontend to send cookies to our backend
app.use(cookieParser());


const PORT = ENV.PORT || 3000;


app.use(express.json());

app.use("api/routes",user_route );
app.use("api/messages",message_route );


if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/dist/index.html")
    );
  });
}

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
  connectDB();
});