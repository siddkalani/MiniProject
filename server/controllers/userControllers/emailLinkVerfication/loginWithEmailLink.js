const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendVerifyEmail } = require("../../services/authVerifyService");

//POST -> /user/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, phone, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ message: "Please register yourself first." });
    }

    if (!user.isVerified) {
      await sendVerifyEmail(user.name, user.email, user._id);
      return res.status(401).json({
        message:
          "Please verify your email. A verification link has been resent to your email.",
      });
    }

    const matchPass = await bcrypt.compare(password, user.password);
    if (!matchPass) {
      res.status(401).json({ message: "Login credentials are incorrect" });
      // throw new Error("Login credentials are incorrect");
    }

    const accessToken = jwt.sign(
      {
        user: {
          name: user.name,
          email: user.email,
          user_id: user.id,
        },
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "30m" }
    );

    res.status(200).json({ message: "Logged In", accessToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = loginUser;
