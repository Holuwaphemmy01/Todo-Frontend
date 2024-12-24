import React from 'react';
import '../../styles/landingPage/hero.css';


const Hero = ({ openRegister }) => {
  return (
    <section className="hero">
      <h1>Hello, Start Planning Today</h1>
      <p>Organize your tasks efficiently and achieve your goals.</p>
      <button onClick={openRegister} className="btn-main">Get Started</button>
    </section>
  );
};

export default Hero;
