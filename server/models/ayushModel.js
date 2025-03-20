const mongoose = require('mongoose');
const doctorSchema = require('./doctorsModel')

const ayushSchema = new mongoose.Schema({
  treatment: {
    type: String,
    required: true,
    enum: [
      'Orthopedic', 
      'Cardiovascular', 
      'Ayurveda', 
      'Hair Transplant', 
      'All', 
      'Yoga & Naturopathy', 
      'Unani', 
      'Siddha', 
      'Homeopathy', 
      'Other AYUSH'
    ], // Include all relevant AYUSH treatments
  },
  city: {
    type: String,
    required: true,
    enum: ['Mumbai', 'Pune', 'Bengaluru', 'Delhi', 'Chennai', 'All'], // Add more cities as needed
  },
  budget: {
    type: String,
    required: true,
    enum: ['1L - 5L', '5L - 10L', '10L+', 'Any'], // Adjust to your specific budget range
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
      type: [doctorSchema], // Array of doctor subdocuments
      required: true,
    },
    ayurvedic_treatments: {
      type: [String], // Specific Ayurvedic treatments offered
      required: function() { return this.treatment === 'Ayurveda'; } // Only required if it's an Ayurvedic hospital
    }
  },
  ayush_center_type: {
    type: String,
    enum: ['Ayurveda', 'Yoga & Naturopathy', 'Unani', 'Siddha', 'Homeopathy', 'Other AYUSH'],
    required: function() { return this.treatment.includes('AYUSH'); } // Required if it's an AYUSH-related treatment
  }
});

module.exports = mongoose.model("AyushHospitals", ayushSchema);
