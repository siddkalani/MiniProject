const express = require("express");
const {
  getAllUsers,
  registerUser,
  verifyEmail,
  loginUser,
  verifyForgetPassEmail,
  verifyEmailOTP,
  setForgetPassword,
} = require("../controllers/userControllers/USER_CONTROLLER");
const {
  resendEmailVerificationLink,
} = require("../controllers/userControllers/emailLinkVerfication/resendEmailVerificationLink");
const {
  resendEmailOTP,
} = require("../controllers/userControllers/emailOTPVerification/resendEmailOTP");
const {
  createHealthCard,
  getHealthCard,
} = require("../controllers/healthCardController");
const router = express.Router();

router.route("/").get(getAllUsers);
// router.route("/:id").get();
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

router.route("/verify/email").get(verifyEmail);
router.route("/resend/verification/link").post(resendEmailVerificationLink);

router.route("/verify/email/otp").post(verifyEmailOTP);
router.route("/resend/email/otp").post(resendEmailOTP);

router.route("/reset/password/request").post(verifyForgetPassEmail);
router.route("/reset/password").post(setForgetPassword);

router.route("/healthCard").post(createHealthCard);
router.route("/healthCard").get(getHealthCard);

module.exports = router;
