const express = require("express");
const { getFilteredHospitals } = require("../controllers/hospital");
const { getFilteredAyushCenters } = require("../controllers/ayushController");
const { createHealthCard } = require("../controllers/healthCardController");
const { getFilteredFlights } = require("../controllers/flightController");
const { getFilteredHotels } = require("../controllers/hotelController");
const { searchPackages } = require("../controllers/packageController"); 
const router = express.Router();

router.route("/hospitals").get(getFilteredHospitals);
router.route("/ayush/hospitals").get(getFilteredAyushCenters);
router.route('/healthCard').post(createHealthCard)

router.route('/flights').get(getFilteredFlights)
router.route('/hotels').get(getFilteredHotels)

router.route('/searchPackages').post(searchPackages);

module.exports = router;
