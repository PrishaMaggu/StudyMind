const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const ProductivityLog = require("../models/ProductivityLog");

const router = express.Router();

router.post("/add", protect, async (req, res) => {
  try {
    const log = await ProductivityLog.create({
      ...req.body,
      userId: req.user.id
    });
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/my", protect, async (req, res) => {
  const logs = await ProductivityLog.find({ userId: req.user.id }).populate("locationId");
  res.json(logs);
});

module.exports = router;
