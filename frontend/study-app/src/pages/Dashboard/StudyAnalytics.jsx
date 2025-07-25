// pages/StudyAnalytics.jsx
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const StudyAnalytics = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await axios.get('/api/studyLogs');
      setLogs(res.data);
    };
    fetchLogs();
  }, []);

  const data = {
    labels: logs.map(log => log.date.split('T')[0]),
    datasets: [
      {
        label: 'Productivity',
        data: logs.map(log => log.productivity),
        backgroundColor: 'rgba(99, 102, 241, 0.6)'
      }
    ]
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Study Analytics</h2>
      <Bar data={data} />
    </div>
  );
};

export default StudyAnalytics;
