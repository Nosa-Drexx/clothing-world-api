import { Router } from "express";
import { login, logout, register } from "../controllers/auth.js";
import { requireLogin } from "../middleware/auth.js";
import passport from "passport";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Route for Google callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home or where you want

    return res.status(200).json({ success: true, data: req.user });
  }
);

export { router };
