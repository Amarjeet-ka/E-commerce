import React from 'react';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login';
import Homepage from './pages/Home';
import CompHome from './pages/CompHome';
import api from './api';
function App() {

  return (
    <Router>
      <Routes>
        {/* Routes accessible to all users */}
        <Route path="/" element={<LoginPage  />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/complaints" element={<CompHome />} />
        {/* Protected routes */}
      
        
          <Route
            path="/"
            element={
              <Navigate
                replace
                to="/login"
                
              />
            }
          />
        
      </Routes>
    </Router>
  );
}

export default App;
