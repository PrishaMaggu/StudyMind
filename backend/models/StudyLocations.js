const mongoose = require("mongoose");

const StudyLocationsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    type: String, // e.g., "library", "cafe", "dorm"
    capacity: Number, // Optional, for places with limited seating
    tags: [String]
}, { timestamps: true });

module.exports = mongoose.model("StudyLocations", StudyLocationsSchema);