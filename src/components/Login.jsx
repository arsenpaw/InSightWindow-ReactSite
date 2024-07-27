import React, { useState } from 'react';
import './Login.css';
import imgLogo from '../assets/ax2.png';
import { UserLoginDto } from "../models/UserLoginDto";

async function writeTokenToCookie() {
  // Implementation for writing token to cookie
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    let userLogin = new UserLoginDto(email, password);
    console.log('Email:', email);
    console.log('Password:', password);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userLogin)
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_LINK_LOCAL}/api/Auth/login`, requestOptions);
      if (response.ok) {
        const data = await response.json();
        let token =  response.headers.get("token")
        let refreshToken = response.headers['refresh-token']
        // Handle successful login, e.g., save token, redirect, etc.
        alert('Login successful:', refreshToken);

      } else {
        alert('Login failed:', response.status);

        // Optionally, handle specific status codes like 401 (Unauthorized)
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
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="links">
          <a href="/signup">Signup</a>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
