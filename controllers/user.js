import User from "../models/user.js";

export const userExist = async (req, res) => {
  const { username } = req.params;
  if (!username) return res.status(400).json({ error: "username is required" });

  try {
    const user = await User.findOne({ username });
    if (user) return res.status(200).json({ success: true, exist: true });
    return res.status(200).json({ success: true, exist: false });
  } catch (e) {
    return res.status(400).json({ success: false, error: e.message });
  }
};
