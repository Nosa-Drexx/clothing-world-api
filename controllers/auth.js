import passport from "passport";
import User from "../models/user.js";

const successMessage = { success: true, data: null };
export const register = async (req, res) => {
  try {
    const { email, username, password, firstname, lastname } = req.body;
    if (!username || !password || !email || !firstname || !lastname) {
      return res.status(400).json({
        error: "username, password, email, firstname and lastname are required",
      });
    }

    const user = new User({
      email,
      username: username.toLowerCase(),
      firstname,
      lastname,
    });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (error) => {
      if (error)
        return res.status().json({
          success: false,
          data: { error: error, message: "Registration failed" },
        });
      res.status(201).json({ ...successMessage, data: registeredUser });
    });
  } catch (e) {
    res.status(400).json({ error: e.message, message: "Registration failed" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "username and password are required" });
  }

  try {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({
            success: false,
            message: "username or password incorrect",
          });
        } else {
          res.status(200).json({
            ...successMessage,
            data: { message: "Authentication successful" },
          });
        }
      }
    })(req, res);
  } catch (e) {
    res
      .status(400)
      .json({ error: e.message, message: "invalid email or password" });
  }
};

export const logout = (req, res) => {
  req.logout((err) => {
    if (err)
      return res.status().json({
        success: false,
        data: { error: error, message: "Error logging out" },
      });
    res
      .status(200)
      .json({ ...successMessage, data: { message: "logout successful" } });
  });
};
