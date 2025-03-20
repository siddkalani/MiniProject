const Hotel = require("../models/hotelModel");

// Fetch hotels based on filters
const getFilteredHotels = async (req, res) => {
  try {
    const { location, checkIn, checkOut, guests, rooms } = req.query;

    // Build the query object dynamically
    const query = {};
    if (location) query.location = location;
    if (checkIn) query.checkInDate = { $lte: new Date(checkIn) };
    if (checkOut) query.checkOutDate = { $gte: new Date(checkOut) };
    if (guests) query.numberOfGuests = { $gte: guests };
    if (rooms) query.numberOfRooms = { $gte: rooms };

    // Fetch hotels that match the filters
    const hotels = await Hotel.find(query);

    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getFilteredHotels };
