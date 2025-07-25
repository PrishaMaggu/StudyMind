const express = require("express");
const { protect } = require('../middleware/authMiddleware');
const StudyLocation = require('../models/StudyLocations'); 

const router = express.Router(); 

router.post("/add", protect, async (req, res) => {
    try {
        const location = await StudyLocation.create(req.body); 
        res.status(201).json(location);
    } catch (error) {
        res.status(500).json({ message: "Error adding location", error: error.message });
    }
 });
    
router.get("/all", protect, async (req, res) => {   
    const locations = await StudyLocation.find();
    res.status(200).json(locations);
}); 

module.exports = router; 