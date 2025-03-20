const asyncHandler = require("express-async-handler");
const User = require("../../../models/userModel");

//  GET -> /user/verify-email
const verifyEmail = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.query.id });

  if (!user) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid or expired link" });
  }

  if (user.isVerified) {
    return res
      .status(400)
      .json({ success: false, error: "User already verified" });
  }

  user.isVerified = true;
  await user.save();

  res
    .status(200)
    .json({ success: true, message: "Email verified successfully" });
});

module.exports = verifyEmail;
