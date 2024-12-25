import React from 'react';
import CurrentTime from './CurrentTime';
import { useNavigate } from 'react-router-dom';
import '../../styles/dashboard/headerDashboard.css';



const Header = ({ currentTime, onLogout, onLoginSuccess}) => {

  const navigate = useNavigate();

  const handleLogout =()=>{
    onLoginSuccess('')
    navigate('/');
  };
  return (
    <header className="headerDashboard">
      <div className="logo">
        <span className="circle">A</span>
        <span className="site-name">Todo App</span>
      </div>
      <nav className="header-nav">
         <div className="time-container">
              <CurrentTime className="time-display" />
         </div>
      <button onClick={handleLogout} className="logout-button">Log Out</button>
      </nav>
    </header>
  );
};

export default Header;
