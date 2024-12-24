import React from 'react';
import{SocialIcon} from 'react-social-icons';
import '../../styles/landingPage/footer.css';



const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Akinzo Tech. All Rights Reserved.</p>
      <div className="social-icons">
      <SocialIcon url="https://facebook.com" style={{ margin: '0 8px' }} />
        <SocialIcon url="https://instagram.com" style={{ margin: '0 8px' }} />
        <SocialIcon url="https://twitter.com" style={{ margin: '0 8px' }} />
        <SocialIcon url="https://linkedin.com" style={{ margin: '0 8px' }} />
      </div>
    </footer>
  );
};

export default Footer;
