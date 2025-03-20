const Package = require("../models/packageModel");

// NO LOCATION FILTER
exports.searchPackages = async (req, res) => {
  try {
    const { treatment, budget } = req.body;

    console.log("📩 Incoming Request Data:", req.body);

    // Validate Inputs
    if (!treatment && !budget) {
      return res
        .status(400)
        .json({ message: "❌ Please provide at least one search filter (treatment, budget)." });
    }

    // Construct Query
    const query = {};

    if (treatment && treatment.trim() !== "") {
      query["Treatments Provided"] = { $regex: treatment.trim(), $options: "i" };
    }
    if (budget && !isNaN(parseInt(budget))) {
      query["Treatment Cost"] = { $lte: parseInt(budget) };
    }

    console.log("🔍 Constructed Query:", JSON.stringify(query, null, 2));
    
    // Fetch Packages
    const packages = await Package.find(query).limit(5);
    console.log(`✅ Found ${packages.length} Packages`);

    if (packages.length === 0) {
      return res
        .status(200)
        .json({ message: "❌ No hospital packages found.", packages: [] });
    }

    res.status(200).json({ packages });
  } catch (error) {
    console.error("🚨 Search Packages Error:", error);
    res.status(500).json({ message: "❌ Server error occurred. Please try again later." });
  }
};
