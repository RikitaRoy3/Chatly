import express from "express";
import { getMessagesByUserId, getUserById, sendMessage } from "../controllers/message.controller.js";
import { checkauth } from "../middlewares/auth.middleware.js";

const router = express.Router();





router.get("/:userId", getMessagesByUserId);

router.get("/call/:userId", checkauth, getUserById);

router.post("/send/:userId", sendMessage);


router.put("/delete", (req,res)=>{
  res.send("This is my Delete Message endpoint");
});

router.put("/update", (req,res)=>{
  res.send("This is my Update Message endpoint");
});


export default router;

