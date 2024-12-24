import React from 'react';
import '../../styles/landingPage/form.css';

const RegisterForm = ({ closeForm, openLogin }) => {
  return (
    <div className="form">
      <div className="form-content">
        <span className="close" onClick={closeForm}>
          ×
        </span>
        <h2 className="register">Register</h2>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="Enter your first name" required/>

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Enter your last name" required/>

          <label htmlFor="userName">Username</label>
          <input type="text" id="userName" placeholder="Enter your username" required/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required/>

          <p>
            Already have an account?{' '}
            <button type="button" className="link-button" onClick={openLogin}>
              Login Here
            </button>
          </p>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;