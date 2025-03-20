// doctorModel.js
const mongoose = require('mongoose');

// Define the doctor schema
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true, // years of experience
  },
});

module.exports = doctorSchema;  // Export the schema, not the model
