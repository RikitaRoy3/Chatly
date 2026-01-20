import express from "express";
import { login, signup, logout, updateProfile } from "../controllers/user.controller.js";

const router = express.Router();



router.post("/signup", signup);

router.post("/login", login);


router.post("/logout", logout);


router.put("/update", updateProfile);

export default router;

