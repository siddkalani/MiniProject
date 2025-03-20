const getAllUsers = require("./getAllUsers");
const registerUser = require("./registerUser");

const loginUser = require("./loginUser");

const { verifyEmailOTP } = require("./emailOTPVerification/verifyEmailOTP");
const verifyForgetPassEmail = require("./resetForgotPassword/verifyForgetPassEmail");
const setForgetPassword = require("./resetForgotPassword/setForgetPassword");

const verifyEmail = require("./emailLinkVerfication/verifyEmail");

module.exports = {
  getAllUsers,
  registerUser,
  verifyEmailOTP,
  loginUser,
  verifyForgetPassEmail,
  setForgetPassword,

  verifyEmail,
};
