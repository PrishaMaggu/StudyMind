// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-indigo-600 text-white">
      <h1 className="font-bold text-xl">StudyTracker</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/log">Log</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/map">Map</Link>
      </div>
    </nav>
  );
};

export default Navbar;
