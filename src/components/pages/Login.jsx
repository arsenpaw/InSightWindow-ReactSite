import React, {useContext, useState} from 'react';
import './Login.css';
import imgLogo from '../../assets/ax2.png';
import {UserLoginDto} from "../../models/UserLoginDto";
import {useNavigate} from 'react-router-dom';
import  {AuthContext} from "../../contexts/AuthContext";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {login} = useContext(AuthContext);
    const navManager = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        let userLogin = new UserLoginDto(email, password);
        console.log('Email:', email);
        console.log('Password:', password);

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(userLogin)
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_LINK}/api/Auth/login`, requestOptions);
            if (response.ok) {
                alert('Login successful:', response.status);
                login();
                navManager("/userdetails")

            } else {
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
                    <img src={imgLogo} alt="Logo"/>
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
                    <button type="submit" className="login-button">Submit</button>
                </form>
                <div className="links">
                    <a href="/register">Register</a>
                    <a href="/forgot-password">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
