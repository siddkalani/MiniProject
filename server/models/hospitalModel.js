// hospitalModel.js
const mongoose = require('mongoose');
const doctorSchema = require('./doctorsModel'); // Import doctor schema

const hospitalSchema = new mongoose.Schema({
  treatment: {
    type: String,
    required: true,
    enum: ['Orthopedic', 'Cardiovascular', 'Ayurveda', 'Hair Transplant', 'All'],
  },
  city: {
    type: String,
    required: true,
    enum: ['Mumbai', 'Pune', 'Bengaluru', 'All'],
  },
  budget: {
    type: String,
    required: true,
    enum: ['1L - 5L', '5L - 10L', '10L+', 'Any'],
  },
  hospital: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  details: {
    description: {
      type: String,
      required: true,
    },
    facilities: {
      type: [String],
      required: true,
    },
    doctors: {
      type: [doctorSchema], // This should be an array of subdocuments
      required: true,
    },
  },
});

module.exports = mongoose.model("Hospitals", hospitalSchema);
