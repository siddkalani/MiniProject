const Ayush = require("../models/ayushModel"); 

// Fetch AYUSH centers based on filters
const getFilteredAyushCenters = async (req, res) => {
  try {
    const { treatment, city, budget } = req.query;

    // Build the query object dynamically
    const query = {};
    if (treatment && treatment !== "all") query.treatment = treatment;
    if (city && city !== "all") query.city = city;
    if (budget && budget !== "any") query.budget = budget;

    // Fetch AYUSH centers that match the filters
    const ayushCenters = await Ayush.find(query);

    res.status(200).json(ayushCenters);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getFilteredAyushCenters };
