const User = require("../models/User");
const createSuperAdmin = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email is already exists",
      });
    }

    const admin = await User.create({
      fullname,
      email,
      password,
      role: "admin",
    });
    return res.status(201).json({
      success: true,
      message: "Admin Created Successfully",
      admin: {
        id: admin._id,
        fullname: admin.fullname,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {}
  return res.status(500).json({
    success: false,
    message: error.message,
  });
};
module.exports = { createSuperAdmin };
