const express = require('express');
const { protect } = require('../middleware/authMiddleware');

const {
  addLog,
  getAllLogs,
  deleteLog,
  downloadLogsExcel,
} = require('../controllers/productivityController');

const router = express.Router();

router.post('/add', protect, addLog);
router.get('/getAll', protect, getAllLogs);
router.get('/downloadexcel', protect, downloadLogsExcel);
router.delete('/:id', protect, deleteLog);

module.exports = router;
