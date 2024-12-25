import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/dashboard/headerDashboard.css';



const Header = ({ currentTime, onLogout }) => {

  const navigate = useNavigate();

  const handleLogout =()=>{
    navigate('/');
  };
  return (
    <header className="headerDashboard">
      <div className="logo">
        <span className="circle">A</span>
        <span className="site-name">Todo App</span>
      </div>
      <nav className="header-nav">
        <div className="time-display">{currentTime}</div>
        <button onClick={handleLogout} className="logout-button">Log Out</button>
      </nav>
    </header>
  );
};

export default Header;
