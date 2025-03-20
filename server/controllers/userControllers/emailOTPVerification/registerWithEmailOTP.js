
const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const randomString = require("randomstring");
const { sendOtp_email } = require("./emailOTPVerification/verifyEmailOTP");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      if (user.isVerified) {
        return res.status(400).json({ message: "User already exists with this email id" });
      } else {
        const otp = randomString.generate({ length: 4, charset: "numeric" });
        user.otp = await bcrypt.hash(otp, 10);
        user.otpExpires = Date.now() + 3600000; // OTP expires in 1 hour
        await user.save();

        await sendOtp_email(name, email, otp);
        return res.status(200).json({ success: true, message: "Otp resent successfully!" });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = randomString.generate({ length: 4, charset: "numeric" });
    const hashedOTP = await bcrypt.hash(otp, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      otp: hashedOTP,
      otpExpires: Date.now() + 3600000,
    });

    await sendOtp_email(name, email, otp);
    res.status(200).json({ success: true, message: "Otp sent successfully!" });
    console.log("Otp sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "User creation failed" });
  }
});

module.exports = registerUser;
