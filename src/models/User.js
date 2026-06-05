const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    fullname: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["super_admin", "admin"],
      default: "admin",
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("User", userSchema);
