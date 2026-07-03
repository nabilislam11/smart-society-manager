const isSuperAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "super_admin") {
      return res.this.status(409).json({
        success: false,
        message: "Acces Denied .Super admin only",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};
module.exports = isSuperAdmin;
