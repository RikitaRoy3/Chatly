import express from "express";
import { getMessagesByUserId, getUserById, sendMessage } from "../controllers/message.controller.js";
import { checkauth } from "../middlewares/auth.middleware.js";

const router = express.Router();



router.get("/chats", getChatPartners);// Make sure this is above the getMessagesByUserId route bec.."/:userId" can match with "/chats", so better to keep this route above to avode that case(otherwise if that case occures and we don't keep this route above then this route can be ignored.)

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

