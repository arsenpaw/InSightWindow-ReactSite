import React, { useContext, useState } from 'react';
import styles from './Login.module.css';
import imgLogo from '../../assets/ax2.png';
import { UserLoginDto } from "../../models/UserLoginDto";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, setCookie } from "../../contexts/AuthContext";
import apiClient from "../../apiClient";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useContext(AuthContext);
    const navManager = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        let userLogin = new UserLoginDto(email, password);

        try {
            const response = await apiClient.post("/auth/login", userLogin);

            setCookie('token', response.headers['token'], process.env.TOKEN_DEADLINE);
            setCookie('refresh-token', response.headers['refresh-token'], process.env.REFRESH_TOKEN_DEADLINE);

            login();
            navManager("/userdetails");
            alert('Authorization successful!');
        } catch (error) {
            if (error.response) {
                alert(`Authorization failed: ${error.response.data.message} (Status: ${error.response.status})`);
            } else {
                alert(`Authorization failed: ${error.message}`);
            }
            console.error('Error during login:', error);
        }
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <div className={styles.logo}>
                    <img src={imgLogo} alt="Logo" />
                </div>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <div className={styles.inputWrapper}>
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
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <div className={styles.inputWrapper}>
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
                                className={styles.iconShowPassword}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </i>
                        </div>
                    </div>
                    <button type="submit" className={styles.loginButton}>Submit</button>
                </form>
                <div className={styles.links}>
                    <Link to="/register">Register</Link>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;