import React, { useState } from 'react';
import '../../styles/landingPage/form.css';





const LoginForm = ({ closeForm, openRegister, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) =>{
    const apiResponse = {success: true, username};

    if(apiResponse.success){
      onLoginSuccess(username);
    }
    else{
      setError('Invalid username or password');
    }
  }

  return (
    <div className="form">
      <div className="form-content">
        <span className="close" onClick={closeForm}>&times;</span>
        <h2 className='login'>Login</h2>
        <form className='formPage'>
          <label htmlFor="username">username </label>
          <input 
            type="text" 
            id="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"  
            required
          />
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password" 
          required
          />
          <p>
            Don't have an account?{' '}
            <button type="button" className="link-button" onClick={openRegister}>
              Register Here
            </button>
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
