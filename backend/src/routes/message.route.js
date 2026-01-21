import express from "express";
import { sendMessage } from "../controllers/message.controller.js";

const router = express.Router();



router.post("/send", sendMessage);


router.put("/delete", (req,res)=>{
  res.send("This is my Delete Message endpoint");
});

router.put("/update", (req,res)=>{
  res.send("This is my Update Message endpoint");
});


export default router;

