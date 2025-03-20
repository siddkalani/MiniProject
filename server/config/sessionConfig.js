const cookieSession = require("cookie-session");
const dotenv = require("dotenv").config();

const session = cookieSession({
  name: "session",
  keys: [process.env.SESSION_KEY],
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
});

module.exports = session;
