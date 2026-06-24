const User = require("../models/User");
const bcrypt = require("bcrypt");
const tokenGenarator = require("../utils/token");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("hit");

    console.log(email, password);

    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "Email and Password are reqquired",
      });
    }
    const existingAdmin = await User.findOne({ email });
    if (!existingAdmin) {
      return res.status(404).json({
        success: false,
        message: "Admin not Fount ",
      });
    }
    //comapre password
    const isMatch = await bcrypt.compare(password, existingAdmin.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }
    const token = tokenGenarator(
      { id: existingAdmin._id, role: existingAdmin.role },
      process.env.ACCESS_TOKEN_SECRET,
      "7d",
    );
    return res.status(200).json({
      success: true,
      message: "Login Successfully",
      token,
      existingAdmin: {
        id: existingAdmin.id,
        fullname: existingAdmin.fullname,
        email: existingAdmin.email,
        role: existingAdmin.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  loginController,
};
