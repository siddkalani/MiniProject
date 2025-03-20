const asyncHandler = require("express-async-handler");
const User = require("../../../models/userModel");
// const randomString = require("randomstring");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const { sendResetEmail } = require("../../../services/authVerifyService");

//POST -> /reset/password/request
const verifyForgetPassEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User email is incorrect" });
  }

  if (!user.isVerified) {
    return res.status(400).json({ message: "Please verify your email" });
  }

  // const token = randomString.generate();
  const token = crypto.randomBytes(32).toString("hex");

  const hashedToken = await bcrypt.hash(token, 10);

  await User.updateOne(
    { email },
    { $set: { token: hashedToken, tokenExpires: Date.now() + 3600000 } }
  );

  await sendResetEmail(user.email, user.id, token);

  res.json({
    message: "Check your email to reset password",
    token: token,
    userId: user._id,
  });
});

module.exports = verifyForgetPassEmail;
