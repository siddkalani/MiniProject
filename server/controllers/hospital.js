const Hospital = require("../models/hospitalModel");

// Fetch hospitals based on filters
const getFilteredHospitals = async (req, res) => {
  try {
    const { treatment, city, budget } = req.query;

    // Build the query object dynamically
    const query = {};
    if (treatment && treatment !== "all") query.treatment = treatment;
    if (city && city !== "all") query.city = city;
    if (budget && budget !== "any") query.budget = budget;

    // Fetch hospitals that match the filters
    const hospitals = await Hospital.find(query);

    res.status(200).json(hospitals);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getFilteredHospitals };
