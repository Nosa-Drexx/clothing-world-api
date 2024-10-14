import { Router } from "express";
import {
  isAutheticated,
  login,
  logout,
  register,
} from "../controllers/auth.js";
import passport from "passport";
import { getRedirectToFromClient, requireLogin } from "../middleware/auth.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/authenticated", requireLogin, isAutheticated);

//Login with google
router.get(
  "/auth/google",
  getRedirectToFromClient,
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Route for Google callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_ENDPOINT}/login`,
  }),
  function (req, res) {
    // Successful authentication, redirect home or where you want
    const redirectTo = req.session.redirectTo || "/";

    // Clear the session variable (optional, but good practice)
    req.session.redirectTo = null;

    return res.redirect(`${process.env.CLIENT_ENDPOINT}${redirectTo}`);
  }
);

export { router };
