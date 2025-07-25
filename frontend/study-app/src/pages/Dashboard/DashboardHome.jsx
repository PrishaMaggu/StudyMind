// pages/DashboardHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Welcome to StudyTracker!</h1>
      <p>Track your study sessions and optimize your productivity.</p>
      <div className="space-x-4">
        <Link to="/log" className="btn btn-outline">Log a Session</Link>
        <Link to="/analytics" className="btn btn-outline">View Analytics</Link>
      </div>
    </div>
  );
};

export default DashboardHome;
