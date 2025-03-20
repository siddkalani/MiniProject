const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");

//GET -> /user/
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
});

module.exports = getAllUsers;
