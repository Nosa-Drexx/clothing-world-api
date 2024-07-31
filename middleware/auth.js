export const requireLogin = async (req, res, next) => {
  const val = req.isAuthenticated();
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};
