import express from "express";
import { login, signup } from "../controllers/user.controller.js";

const router = express.Router();



router.post("/signup", signup);

router.post("/login", login);


router.post("/logout", (req,res)=>{
  res.send("This is logout page :(");
});

export default router;

