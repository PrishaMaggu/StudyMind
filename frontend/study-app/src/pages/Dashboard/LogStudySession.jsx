// pages/LogStudySession.jsx
import React from 'react';
import AddStudyLogForm from '../components/AddStudyLogForm';

const LogStudySession = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Log Study Session</h2>
      <AddStudyLogForm />
    </div>
  );
};

export default LogStudySession;
