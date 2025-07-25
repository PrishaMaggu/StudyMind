const User = require('../models/User');
const Income = require('../models/Income');
const xlsx = require('xlsx');

exports.addIncome = async (req, res) => {
    const userId = req.user._id; // Get user ID from the authenticated user
    try {
        const { icon, source, amount, date } = req.body;
        // Validate required fields
        if (!source || !amount || !date) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        const newIncome = new Income({
            userId,
            source,
            amount,
            date: new Date(date)
        });

        await newIncome.save();
        res.status(201).json({newIncome}); 
        } catch (error) {
            res.status(500).json({ message: 'Error adding income', error: error.message });
        
    }
}
exports.getAllIncome = async (req, res) => {
    const userId = req.user._id; // Get user ID from the authenticated user
    try {
        const incomes = await Income.find({ userId }).sort({ date: -1 });
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching incomes', error: error.message });
    }
}
exports.deleteIncome = async (req, res) => {
    try {
        await Income.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Income deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting income', error: error.message });
 }

}
exports.downloadIncomeExcel = async (req, res) => {
    const userId = req.user._id; // Get user ID from the authenticated user
    try {
        const incomes = await Income.find({ userId }).sort({ date: -1 });
       
        const data = income.map((item) => ({
            source: item.source,
            amount: item.amount,
            date: item.date.toISOString().split('T')[0] // Format date as YYYY-MM-DD
        }));
        
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, 'Incomes');
        xlsx.writeFile(wb, 'incomes.xlsx');
        res.download('incomes.xlsx'); 
    } catch (error) {
        res.status(500).json({ message: 'Error downloading income data', error: error.message });
    }
};