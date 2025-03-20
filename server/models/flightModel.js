const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  depart: {
    type: Date,
    required: true,
  },
  return: {
    type: Date,
  },
  travellers: {
    type: Number,
    required: true,
    min: 1,
  },
  cabinClass: {
    type: String,
    enum: ["Economy", "Business"],
    default: "Economy",
  },
  airline: {
    type: String,
    enum: ["Air India", "Indigo", "SpiceJet", "GoAir", "Vistara"], // Add more as needed
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Flight", flightSchema);
