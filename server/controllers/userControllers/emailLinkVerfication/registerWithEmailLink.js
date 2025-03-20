// ********* EMAIL VERIFICATION BY LINK ***********
const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const { sendVerifyEmail } = require("../../services/authVerifyService");

// POST -> /user/register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      if (userExists.isVerified) {
        // If the user already exists and is verified
        return res.status(400).json({
          message:
            "This email is already registered. Please try a different email address.",
        });
      } else {
        // If the user already exists but is not verified
        await sendVerifyEmail(name, email, userExists._id); // Resend verification email
        return res.status(400).json({
          message:
            "This email is already registered but not verified. A verification email has been resent.",
        });
      }
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // If user creation is successful, send the verification email
    if (newUser) {
      await sendVerifyEmail(name, email, newUser._id);
      res.status(200).json({ success: "Otp sent successfully!" });
      console.log("Otp sent successfully");
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);
    // Send a generic error message
    res.status(500).json({ message: "User creation failed" });
  }
});

module.exports = registerUser;
