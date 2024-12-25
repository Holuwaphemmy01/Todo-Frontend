import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import DashBoard from './components/dashboard/Dashboard';
// import Dashboard from './components/dashboard/DashBoard';

  function App() {
    return (
        
          // <Routes>
          //   <Route path="/" element={<LandingPage />} />
          //   {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          // </Routes>
        
          // <LandingPage/>
          <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      
      </Routes>
    </Router>
    );
  };


export default App;