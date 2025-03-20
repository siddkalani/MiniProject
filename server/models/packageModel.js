const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    Ward_Name: {
      type: String,
      required: true,
    },
    Hospital_Type: {
      type: String,
      required: true,
    },
    Hospital_Name: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
    },
    No_of_Beds: {
      type: Number,
      required: true,
    },
    Contact: {
      type: String,
      required: true,
    },
    Treatments_Provided: {
      type: String,
      required: true,
    },
    Treatment_Cost: {
      type: Number, // Cost in INR
      required: true,
    },
    Treatment_Duration: {
      type: Number, // Number of days
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
