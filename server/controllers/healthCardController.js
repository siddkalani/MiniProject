const HealthCard = require("../models/healthCardModel");

const createHealthCard = async (req, res) => {
  
  try {
    console.log("Request body:", req.body);

    const {
      user_id,
      health_id,
      past_medical_records,
      vaccines,
      tests_needed,
      emergency_contact,
      relationship, // Include relationship if needed
    } = req.body;
    // Check if health_id already exists for uniqueness
    const existingCard = await HealthCard.findOne({ health_id });
    if (existingCard) {
      return res.status(400).json({ message: "Health ID already exists." });
    }

    // Create a new HealthCard
    const newHealthCard = new HealthCard({
      user_id,
      health_id,
      past_medical_records: past_medical_records || [], // Default to empty array if not provided
      vaccines: vaccines || [], // Default to empty array if not provided
      tests_needed: tests_needed || [], // Default to empty array if not provided
      emergency_contact,
      relationship,
    });

    // Save to the database
    const savedHealthCard = await newHealthCard.save();

    res.status(201).json({ message: "Health card created successfully", data: savedHealthCard });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const getHealthCard = async (req, res) => {
  try {
    const { id } = req.params;

    // Retrieve the health card using either user ID or health ID
    const healthCard = await HealthCard.findOne({
      $or: [{ user_id: id }, { health_id: id }],
    }).populate('user_id', 'name email'); // Populate user information (if needed)

    if (!healthCard) {
      return res.status(404).json({ message: "Health card not found" });
    }

    res.status(200).json({ message: "Health card retrieved successfully", data: healthCard });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};



module.exports = { createHealthCard, getHealthCard };
