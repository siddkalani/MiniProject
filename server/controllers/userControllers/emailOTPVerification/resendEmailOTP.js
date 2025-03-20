const asyncHandler = require("express-async-handler");
const User = require("../../../models/userModel");
const { sendOtp_email } = require("./verifyEmailOTP");
const randomString = require("randomstring");
const bcrypt = require("bcrypt");

// POST -> /user/resend/email/otp
const resendEmailOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "User is already verified" });
    }

    const otp = randomString.generate({ length: 4, charset: "numeric" });

    // Ensure that you pass the user's name as well
    await sendOtp_email(user.name, email, otp);

    // Save the OTP and expiration in the user's record if needed
      user.otp = otp; // Consider hashing the OTP before saving
      user.otp = await bcrypt.hash(otp, 10);
    user.otpExpires = Date.now() + 3600000; // OTP expires in 1 hour
    await user.save();

    res.status(200).json({ success: "Email otp resent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Resending email otp failed" });
  }
});

module.exports = { resendEmailOTP };

