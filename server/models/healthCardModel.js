const mongoose = require("mongoose");

const healthCardSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    health_id: {
      type: String,
      required: true,
      unique: true,
    },
    past_medical_records: { type: String },
    //   {
    //     condition: String,
    //     description: String,
    //     diagnosed_date: Date,
    //     treatment: String,
    //   },
    // ],
    vaccines: { type: String },
    //   [
    //   {
    //     vaccine_name: String,
    //     date_administered: Date,
    //     next_due_date: Date,
    //   },
    // ],
    tests_needed: { type: String },

    // {
    //   test_name: String,
    //   reason: String,
    //   due_date: Date,
    //   completed: Boolean,
    // },
    // ],
    emergency_contact: {
      type: String,
    },
    relationship: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("HealthCard", healthCardSchema);

