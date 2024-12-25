import React from 'react';
import "../../styles/dashboard/footerDashboard.css";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="footerDashboard">
      <div className="footer-logo">
        <span className="circle">A</span>
        <span className="site-name">Akinzo App</span>
      </div>

      <p>&copy; 2024 Akinzo Tech. All Rights Reserved.</p>

      <div className="social-icons">
        <SocialIcon url="https://instagram.com" style={{ width: 30, height: 25 }}/>
        <SocialIcon url="https://twitter.com" style={{ width: 30, height: 25 }}/>
        <SocialIcon url="https://linkedin.com"style={{ width: 30, height: 25 }} />
      </div>
    </footer>
  );
};

export default Footer;
