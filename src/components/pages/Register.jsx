import React, { useState } from 'react';
import './Login.css';
import imgLogo from '../../assets/ax2.png';
import { UserRegisterDto } from "../../models/UserRegisterDto";
import { useNavigate } from 'react-router-dom';
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const  navManager = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    let userLogin = new UserRegisterDto(email, password, firstName,lastName);
    console.log('Email:', email);
    console.log('Password:', password);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
     credentials: 'include' ,
      body: JSON.stringify(userLogin)
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_LINK_GLOBAL}/api/Auth/create`, requestOptions);
      if (response.ok) {
         alert('Login successful:', response.status);
          navManager("/login")

      }
      else if (response.status === 409){
        alert("Email has already been occupaied")
      }

      else {
        alert('Login failed:', response.status);

      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src={imgLogo} alt="Logo" />
        </div>
          <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                      <i className="icon-email"></i>
                      <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="Username@gmail.com"
                      />
                  </div>
              </div>
              <div className="form-group">
                  <label htmlFor="email">First Name</label>
                  <div className="input-wrapper">
                      <i className="icon-email"></i>
                      <input
                          type="text"
                          id="email"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          placeholder="Name"
                      />
                  </div>
              </div>
              <div className="form-group">
                  <label htmlFor="email">Last Name</label>
                  <div className="input-wrapper">
                      <i className="icon-email"></i>
                      <input
                          type="text"
                          id="email"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                          placeholder="Last name"
                      />
                  </div>
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                      <i className="icon-password"></i>
                      <input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          placeholder="Password"
                      />
                      <i
                          className="icon-show-password"
                          onClick={() => setShowPassword(!showPassword)}
                      >
                          {showPassword ? 'Hide' : 'Show'}
                      </i>
                  </div>
              </div>
              <button type="submit" className="login-button">Submit</button>
          </form>
          <div className="links">
              <a href="/login">Log In</a>

          </div>
      </div>
    </div>
  );
}

export default Register;
