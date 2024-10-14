export const requireLogin = async (req, res, next) => {
  const val = req.isAuthenticated();
  console.log(req.isAuthenticated);

  console.log(req, "req");

  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized", logedIn: false });
  }
  next();
};

export const getRedirectToFromClient = async (req, res, next) => {
  const { redirectTo } = req.query;
  req.session.redirectTo = redirectTo || "/"; // default to home if no redirectTo is provided
  next();
};
