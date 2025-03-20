const asyncHandler = require("express-async-handler");
const User = require("../../../models/userModel");
const { sendVerifyEmail } = require("../../../services/authVerifyService");

// POST -> /user/resend/verification/link
const resendEmailVerificationLink = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "User is already verified" });
    }

    await sendVerifyEmail(user.name, user.email, user._id);

    res.status(200).json({ success: "Verification email resent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Resending verification email failed" });
  }
});

module.exports = { resendEmailVerificationLink };
