const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,  
  },
  checkInDate: {
    type: Date,
    required: true,  
  },
  checkOutDate: {
    type: Date,
    required: true,  
  },
  numberOfGuests: {
    type: Number,
    required: true,  
  },
  numberOfRooms: {
    type: Number,
    required: true, 
  },
  pricePerNight: {
    type: Number,
    required: true,  
  },
  amenities: [String],  
  description: {
    type: String,
  },

});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
