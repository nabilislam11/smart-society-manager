const bcrypt = require("bcryptjs");
const User = require("../models/User");
const createSuperAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ role: "super_admin" });
    if (existingAdmin) {
      console.log("Super Admin already exists");
      return;
    }
    const hashPass = await bcrypt.hash(process.env.SUPER_ADMIN_PASSWORD, 10);
    await User.create({
      fullname: process.env.SUPER_ADMIN_NAME,
      email: process.env.SUPER_ADMIN_EMAIL,
      password: hashPass,
      role: "super_admin",
    });
    console.log("Super Admin Created ");
  } catch (error) {
    console.log(error);
  }
};
module.exports = createSuperAdmin;
