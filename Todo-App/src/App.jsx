import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import LandingPage from './components/landingPage/LandingPage';
import LandingPage from './components/landingPage/LandingPage';
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
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      
      </Routes>
    </Router>
    );
  };


export default App;