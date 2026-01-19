import express from "express";

const router = express.Router();



router.post("/send", (req,res)=>{
  res.send("This is my Send Message endpoint");
});

router.post("/receive", (req,res)=>{
  res.send("This is my Receive Message endpoint");
});

router.put("/delete", (req,res)=>{
  res.send("This is my Delete Message endpoint");
});

router.put("/upload", (req,res)=>{
  res.send("This is my Upload Message endpoint");
});


export default router;

