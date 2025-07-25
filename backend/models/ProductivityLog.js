const mongoose = require("mongoose");

const ProductivityLogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'StudyLocations', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }, // Rating from 1 to 5
    duration: Number, // in minutes 
    timestamp: { type: Date, default: Date.now }, // When the log was created
}, { timestamps: true });

module.exports = mongoose.model("ProductivityLog", ProductivityLogSchema);