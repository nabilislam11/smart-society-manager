const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  try {
    const authHeader = ewq.header.authorization;
    // token check
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Access Denied, to Token Provided",
      });
    }
    // bearer token
    const token = authHeader.slipt("")[1];
    // token verify
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error, "authmiddleware token error");
    return res
      .status(500)
      .json({ success: false, message: "Invalid or Expired Token" });
  }
};
module.exports = verifyToken;
