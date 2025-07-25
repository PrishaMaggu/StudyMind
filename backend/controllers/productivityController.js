const ProductivityLog = require('../models/ProductivityLog');
const xlsx = require('xlsx');

exports.addLog = async (req, res) => {
  const userId = req.user._id;
  const { location, productivityRating, timeSpent, date } = req.body;

  if (!location || !productivityRating || !timeSpent || !date) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newLog = new ProductivityLog({
      userId,
      location,
      productivityRating,
      timeSpent,
      date: new Date(date),
    });

    await newLog.save();
    res.status(201).json({ newLog });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add log', error: error.message });
  }
};

exports.getAllLogs = async (req, res) => {
  const userId = req.user._id;
  try {
    const logs = await ProductivityLog.find({ userId }).sort({ date: -1 });
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch logs', error: error.message });
  }
};

exports.deleteLog = async (req, res) => {
  try {
    await ProductivityLog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Log deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete log', error: error.message });
  }
};

exports.downloadLogsExcel = async (req, res) => {
  const userId = req.user._id;
  try {
    const logs = await ProductivityLog.find({ userId }).sort({ date: -1 });

    const data = logs.map((log) => ({
      Location: log.location,
      Rating: log.productivityRating,
      "Time Spent (min)": log.timeSpent,
      Date: log.date.toISOString().split('T')[0],
    }));

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, 'Productivity Logs');
    const filePath = 'productivity_logs.xlsx';
    xlsx.writeFile(wb, filePath);
    res.download(filePath);
  } catch (error) {
    res.status(500).json({ message: 'Error exporting logs', error: error.message });
  }
};
