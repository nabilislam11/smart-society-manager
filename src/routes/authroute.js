const express = require("express");
const { loginController } = require("../controllers/authController");
const verifyToken = require("../middlewares/auth.middleware");
const router = express.Router();
router.post("/login", loginController);
router.get("/me", verifyToken);
module.exports = router;
