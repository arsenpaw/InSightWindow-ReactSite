import React, { useState, useContext } from "react";
import imgLogo from "../../assets/axIcon.png";
import styles from "./UserPanel.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import apiClient from "../../apiClient";
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
            const response = await apiClient.delete("/UsersDb/concreteUser");

            if (response.status === 200) {
                reg.logout();
                navManager("/login");
                alert('Account deleted successfully');
            } else {
                alert('Delete account failed');
            }
        } catch (error) {
            if (error.response?.status === 409) {
                alert('Account has devices, please remove them first');
            } else {
                alert('An error occurred while trying to delete the account.');
            }
            console.error('An error occurred:', error);
        }
    };

    const addDevice = async () => {
        try {
            const response = await apiClient.post(`/UsersDb/BindTo?deviceId=${addingDevice}`);

            if (response.status === 200) {
                setAddDevice("");
                fetchUserDevices();
                alert('Device added successfully');
            } else {
                alert('Adding device failed');
            }
        } catch (error) {
            alert('An error occurred while trying to add device to the account.');
            console.error('An error occurred:', error);
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
                <h3>Delete Account?</h3>
                <button className={styles.deleteAccountButton} onClick={deleteAccount}>
                    Yes, please
                </button>
            </div>
            {reg.isAdmin && (
                <div>
                    <div>
                        <button className={styles.deleteAccountButton} onClick={() => {}}>
                            ADMIN PANEL
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}