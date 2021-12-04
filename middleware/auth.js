const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  if (!config.get("requiresAuth")) return next();

  const token = req.header("x-auth-token");

  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(
      token,
      process.env.jwtPrivateKey || config.get("jwtPrivateKey")
    );
    req.user = decoded;
    next();
  } catch (ex) {
    if (ex.name === "TokenExpiredError")
      return res.status(401).send("TOKEN_EXPIRED_ERROR");
    res.status(400).send("Invalid token.");
  }
};
