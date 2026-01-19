import express from "express";

const router = express.Router();



router.post("/signup", (req,res)=>{
  res.send("This is my signup page :)");
});
router.post("/login", (req,res)=>{
  res.send("This is my login page :-D ");
});
router.post("/logout", (req,res)=>{
  res.send("This si logout page :(");
});

export default router;

