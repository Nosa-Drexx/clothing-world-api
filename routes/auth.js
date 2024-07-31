import { Router } from "express";
import {
  isAutheticated,
  login,
  logout,
  register,
} from "../controllers/auth.js";
import passport from "passport";
import { requireLogin } from "../middleware/auth.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/authenticated", requireLogin, isAutheticated);

//Login with google
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Route for Google callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google-auth-error",
  }),
  function (req, res) {
    // Successful authentication, redirect home or where you want

    return res
      .status(200)
      .json({ success: true, googleAuthStatus: "success", data: req.user });
  }
);

router.get("/auth/google-auth-error", (req, res) => {
  return res.status(400).json({
    success: false,
    googleAuthStatus: "error",
    error: "Error Authticating with google",
  });
});

export { router };
