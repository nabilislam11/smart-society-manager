const express = require("express");
const { loginController } = require("../controllers/authController");
const isSuperAdmin = require("../middlewares/isSuperAdmin");
const verifyToken = require("../middlewares/auth.middleware");
const { createSuperAdmin } = require("../controllers/adminController");
const router = express.Router();
router.post("/login", loginController);
router.post("/create-admin", verifyToken, isSuperAdmin, createSuperAdmin);
// router.get("/me", (req, res) => {
//   res.json({
//     success: true,
//     user: req.user,
//   });
// });
module.exports = router;
