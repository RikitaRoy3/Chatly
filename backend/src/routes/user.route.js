import express from "express";
import { signup } from "../controllers/user.controller.js";

const router = express.Router();



router.post("/signup", signup);

router.post("/login", (req,res)=>{
  res.send("This is my login page :-D ");
});
router.post("/logout", (req,res)=>{
  res.send("This is logout page :(");
});

export default router;

