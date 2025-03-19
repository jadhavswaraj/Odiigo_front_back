const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    phone: { type: String, required: true, unique: true },
    email: { type: String, unique: true, sparse: true },
    isVerified: { type: Boolean, default: false },
    refreshToken: { type: String },
    lastLogin: { type: Date }, // ✅ ADD THIS LINE
  },
  { timestamps: true }
);

// const userSchema = new mongoose.Schema(
//   {
//     phone: { type: String, required: true, unique: true },
//     email: { type: String, unique: true, sparse: true }, // ✅ add this line here
//     isVerified: { type: Boolean, default: false },
//     refreshToken: { type: String }, // Store refresh token securely

//   },
//   { timestamps: true }
// );

const Users = mongoose.model("User", userSchema);
module.exports = Users;

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     phone: { type: String, required: true, unique: true },
//     email: { type: String, unique: true, sparse: true },
//     isVerified: { type: Boolean, default: false },
//     refreshToken: { type: String }, // Store refresh token securely
//   },
//   { timestamps: true }
// );

// const Users = mongoose.model("User", userSchema);
// module.exports = Users;
