import React, { useState } from 'react';
import styles from './Login.module.css';
import imgLogo from '../../assets/ax2.png';
import { UserRegisterDto } from "../../models/UserRegisterDto";
import { Link, useNavigate } from 'react-router-dom';
import apiClient from "../../apiClient";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navManager = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        let userRegister = new UserRegisterDto(email, password, firstName, lastName);

        try {
            const response = await apiClient.post("/auth/create", userRegister);

            if (response.status === 200) {
                alert('Registration successful!');
                navManager("/login");
            } else if (response.status === 409) {
                alert("Email has already been occupied");
            }
        } catch (error) {
            if (error.response) {
                alert(`Registration failed: ${error.response.data.message} (Status: ${error.response.status})`);
            } else {
                alert(`Registration failed: ${error.message}`);
            }
            console.error('Error during registration:', error);
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
                        <label htmlFor="firstName">First Name</label>
                        <div className={styles.inputWrapper}>
                            <i className="icon-email"></i>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                placeholder="Name"
                            />
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName">Last Name</label>
                        <div className={styles.inputWrapper}>
                            <i className="icon-email"></i>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                placeholder="Last name"
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
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;