import React from 'react';
import '../../styles/landingPage/header.css';


const Header = ({ openLogin, openRegister }) => {
  return (
    <header className="header">
      <div className="logo">
        <span className="circle">A</span>
        <span className="site-name">Todo App</span>
      </div>
      <nav>
        <button id='LoginAndRegister' onClick={openLogin}>Login</button>
        <button id='LoginAndRegister' onClick={openRegister}>Register</button>
        <button onClick={openRegister} className="get-started-btn">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;
