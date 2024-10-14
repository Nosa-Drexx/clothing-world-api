import passport from "passport";
import User from "../models/user.js";

const successMessage = { success: true, data: null };
export const register = async (req, res) => {
  try {
    const { email, username, password, firstname, lastname, googleId } =
      req.body;
    if (!username || !password || !email || !firstname || !lastname) {
      return res.status(400).json({
        error: "username, password, email, firstname and lastname are required",
      });
    }

    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "username or email address already exist",
      });
    }

    const user = new User({
      email,
      username,
      firstname,
      lastname,
      googleId: googleId || undefined,
      cart: [{ productId: "66aa6a24084a820680248856", amount: 1 }], //delete later
    });

    const registeredUser = await User.register(user, password);
    const populatedRegisteredUser = await registeredUser.populate({
      path: "cart.productId", // Populate the productId field within the cart array
    });
    req.login(populatedRegisteredUser, (error) => {
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
    passport.authenticate("local", async function (err, user, info) {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({
            success: false,
            message: "username or password incorrect",
          });
        } else {
          const populatedUser = await user.populate({ path: "cart.productId" });
          res.status(200).json({
            ...successMessage,
            data: { message: "Authentication successful", user: populatedUser },
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

export const isAutheticated = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      const user = await req.user.populate({ path: "cart.productId" });
      return res.status(200).json({ ...successMessage, data: user });
    }
    return res.status(401).json({ message: "Unauthorized", logedIn: false });
  } catch (e) {
    return res.status(400).json({ success: false, error: e.message });
  }
};
