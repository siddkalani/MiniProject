const asyncHandler = require("express-async-handler");
const User = require("../../../models/userModel");
const bcrypt = require("bcrypt");

// POST -> /user/reset/password
const setForgetPassword = asyncHandler(async (req, res) => {
  const { password, token, id } = req.body;

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const matchToken = await bcrypt.compare(token, user.token);

  if (!matchToken || user.tokenExpires <= Date.now()) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  user.password = hashedPassword;
  user.token = undefined;
  user.tokenExpires = undefined;
  await user.save();

  res.status(200).json({ success: "Password changed successfully!" });
});

module.exports = setForgetPassword;
