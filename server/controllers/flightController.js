const Flight = require("../models/flightModel");

// Fetch flights based on filters
const getFilteredFlights = async (req, res) => {
  try {
    const { from, to, depart, return: returnDate, travellers, cabinClass } = req.query;

    // Build the query object dynamically
    const query = {};
    if (from) query.from = from;
    if (to) query.to = to;
    if (depart) query.depart = new Date(depart);
    if (returnDate) query.return = new Date(returnDate);
    if (travellers) query.travellers = { $gte: travellers };
    if (cabinClass && cabinClass !== "any") query.cabinClass = cabinClass;

    // Fetch flights that match the filters
    const flights = await Flight.find(query);

    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getFilteredFlights };
