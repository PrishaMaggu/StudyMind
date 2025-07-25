// components/AddStudyLogForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddStudyLogForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    duration: '',
    productivity: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/studyLogs', formData); // adjust backend endpoint
      alert('Study session logged!');
      setFormData({ location: '', duration: '', productivity: '', date: '' });
    } catch (err) {
      console.error(err);
      alert('Error logging session');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="location" placeholder="Location" className="input" value={formData.location} onChange={handleChange} required />
      <input type="number" name="duration" placeholder="Duration (minutes)" className="input" value={formData.duration} onChange={handleChange} required />
      <input type="number" name="productivity" placeholder="Productivity Rating (1-5)" className="input" value={formData.productivity} onChange={handleChange} required min={1} max={5} />
      <input type="date" name="date" className="input" value={formData.date} onChange={handleChange} required />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default AddStudyLogForm;
