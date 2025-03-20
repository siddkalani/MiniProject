const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const User = require("../models/userModel");
const otpGenerator = require("otp-generator");

const sendEmail = asyncHandler(async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.HOST_EMAIL,
      pass: process.env.HOST_EMAIL_PASS,
    },
  });

  const mailData = {
    from: process.env.HOST_EMAIL,
    to,
    subject,
    html,
  };

  await transporter.sendMail(mailData);
});

const sendVerifyEmail = asyncHandler(async (name, email, userId) => {
  const html =
    `<p>Hi ${name}, Please click here to ` +
    `<a href="http://localhost:5173/email/verified?id=${userId}">Verify</a> your email.</p>`;
  // `<a href="http://localhost:3000/user/verify-email?id=${userId}">Verify</a> your email.</p>`;
  await sendEmail(email, "Email Verification", html);
});

const sendOTPEmail = asyncHandler(async (name, email, otp) => {
  const html = `<p>Hi ${name},</p><p>Your OTP code is: <strong>${otp}</strong></p>`;
  await sendEmail(email, "Email Verification OTP", html);
});

const sendResetEmail = asyncHandler(async (email, id, token) => {
  const html =
    `<p>Hi, Please click here to ` +
    `<a href="http://localhost:5173/reset/password?token=${token}&id=${id}">Reset</a> your password.</p>`;
  await sendEmail(email, "Password Reset", html);
});





module.exports = {
  sendEmail,
  sendVerifyEmail,
  sendOTPEmail,
  sendResetEmail,

};
