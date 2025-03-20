const express = require("express");
const dotenv = require("dotenv").config();
const logger = require("morgan");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

const cors = require("cors");
const session = require("./config/sessionConfig");

connectDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use(session);

// Routes
app.use("/user", require("./routes/userRoutes"));
app.use("/api", require("./routes/hostpitalRoutes"));

// Error handling middleware
app.use(errorHandler);

// Initialize cron jobs

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
