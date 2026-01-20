import express from "express";
import { login, signup, logout, updateProfile } from "../controllers/user.controller.js";
import { checkauth } from "../middlewares/auth.middleware.js";

const router = express.Router();



router.post("/signup", signup);

router.post("/login", login);


router.post("/logout", logout);


router.put("/update", checkauth, updateProfile);

router.get("/check", checkauth, (req, res) => {
  res.status(200).json({ message: "Authenticated", user: req.user });
});

export default router;

