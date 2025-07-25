import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate, 

} from 'react-router-dom';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';
import StudyMap from './pages/Dashboard/StudyMap';
import Navbar from './components/layouts/Navbar';


const App = () => {
  return (
      <div>
        <Router>
          <Routes>
            <Route path=" /" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<SignUp />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route pah="/income" exact element={<Income />} />
            <Route path="/expense" exact element={<Expense />} />
            <Route path="/map" exact element={<StudyMap />} />
          </Routes>
        </Router>
      </div>
  )
}


export default App; 

const Root = () => {
  // Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem('token');

  // Redirect to dashboard if autheticated, otherwise to login 
  return isAuthenticated ? (
    <Navigate to="/dashboard" /> 
  ) : (
    <Navigate to="/login" />
  );
};
