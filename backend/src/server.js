import express from "express";
import dotenv from "dotenv";
import user_route from "./routes/user.route.js";
import message_route from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import path from "path";


dotenv.config();

const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT||5000;


app.use(express.json());

app.use("api/routes",user_route );
app.use("api/messages",message_route );


if (process.env.NODE_ENV === "production") {
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