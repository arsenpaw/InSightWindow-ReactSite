import React, { useState, useContext } from "react";
import imgLogo from "../../assets/axIcon.png";
import styles from "./UserPanel.module.css"; // Import CSS Module
import { AuthContext, getCookie } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DeviceContext } from "../../contexts/DeviceContext";

export default function UserPanel() {
    const [addingDevice, setAddDevice] = useState("");

    const reg = useContext(AuthContext);
    const navManager = useNavigate();
    const { fetchUserDevices } = useContext(DeviceContext);

    const deleteAccount = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
        if (!confirmDelete) {
            return;
        }
        try {
            const response = await axios.delete(`${process.env.REACT_APP_LINK}/api/UsersDb/concreteUser`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${getCookie('token')}`, 'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (response.status === 200) {
                reg.logout();
                navManager("/login");
                alert('Account deleted successfully');
            } else {
                alert('Delete account failed');
            }
        } catch (error) {
            if (error.response.status === 409) {
                alert('Account has devices, please remove them first');
            }
            console.error('An error occurred:', error);
            alert('An error occurred while trying to delete the account.');
        }
    };

    const addDevice = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_LINK}/api/UsersDb/BindTo?deviceId=${addingDevice}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${getCookie('token')}`, 'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (response.status === 200) {
                setAddDevice("");
                fetchUserDevices();
            } else {
                alert('Adding device failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            alert('An error occurred while trying to add device to the account.');
        }
    };

    return (
        <div className={styles.userPanel}>
            <div className={styles.userMenu}>
                <img src={imgLogo} alt="Logo" className={styles.logo} />
                <h2>User Panel</h2>
                <ul>
                    <li onClick={() => {
                        reg.logout();
                        navManager("/login");
                    }}>Logout</li>
                </ul>
            </div>
            <div className={styles.userActions}>
                <div>
                    <h3>Add Device</h3>
                    <input
                        type="text"
                        placeholder="Device ID"
                        value={addingDevice}
                        onChange={(e) => setAddDevice(e.target.value)}
                    />
                    <button onClick={addDevice}>Add Device</button>
                </div>
            </div>
            <div className={styles.deleteAccountContainer}>
                <h3>Delete Account</h3>
                <button className={styles.deleteAccountButton} onClick={deleteAccount}>
                    Delete Account
                </button>
            </div>
            {reg.isAdmin && (
            <div >
                <div>
                    <button className={styles.deleteAccountButton} onClick={() =>{}}>ADMIN PANEL</button>
                </div>
            </div>
        )}
        </div>
    );
}
