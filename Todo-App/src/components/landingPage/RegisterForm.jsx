import React, { useState } from 'react';
import axios from 'axios'
import '../../styles/landingPage/form.css';

const RegisterForm = ({ closeForm, openLogin }) => {
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    userName:'',
    password:''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange =(e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };


  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);
    setError(null);
  

  const payload ={
    firstName: formData.firstName,
    lastName: formData.lastName,
    userName: formData.userName,
    password: formData.password
  };

  
  try{
      const response = await axios.post('http://localhost:8083/to-do-app/register', payload);

      if(response.data === 'Registered Successfully'){
        openLogin();
      }
      else{
        setError(response.data);
      }

  }catch (error){
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
  }finally{
    setLoading(false);
  }


};

  return (
    <div className="form">
      <div className="form-content">
        <span className="close" onClick={closeForm}>
          ×
        </span>
        <h2 className="register">Register</h2>
        {error && <div className="error-message">{error}</div>}


        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name='firstName' placeholder="Enter your first name" value={formData.firstName} onChange={handleInputChange} required/>

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name='lastName' placeholder="Enter your last name" value={formData.lastName} onChange={handleInputChange} required/>

          <label htmlFor="userName">Username</label>
          <input type="text" id="userName" name='userName' placeholder="Enter your username" value={formData.userName}  onChange={handleInputChange} required/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password"  name='password' placeholder="Create a password" value={formData.password}  onChange={handleInputChange} required/>

          <p>
            Already have an account?{' '}
            <button type="button" className="link-button" onClick={openLogin}>
              Login Here
            </button>
          </p>

          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;