import React, {useState, useContext} from "react";
import imgLogo from "../assets/axIcon.png";
import "./UserPanel.css";
import {AuthContext, getCookie} from "../AuthContext";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function UserPanel() {
    const [AddingDevice, setAddDevice] = useState([]);
    const [deviceName, setDeviceName] = useState("");
    const reg = useContext(AuthContext);
    const navManager = useNavigate();


    const deleteAccount = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
        if (!confirmDelete) {
            return;
        }
        try {
            const response = await axios.delete(`${process.env.REACT_APP_LINK_LOCAL}/api/UsersDb/concreteUser`, {
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
            console.error('An error occurred:', error);
            alert('An error occurred while trying to delete the account.');
        }
    };

    const addDevice = async () => {

        try {
            const response = await fetch(`${process.env.REACT_APP_LINK_LOCAL}/api/UsersDb/BindTo?deviceId=${AddingDevice}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${getCookie('token')}`, 'Content-Type': 'application/json',
                },
                credentials: 'include',

            });

            if (response.status === 200) {
                console.log(`Device added: ${deviceName}`);

                setDeviceName("");
            } else {
                alert('Adding device failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            alert('An error occurred while trying to add device to  the account.');
        }

    };

    return (
        <div className="user-panel">
            <div className="user-menu">
                <img src={imgLogo} alt="Logo" className="logo"/>
                <h2>User Panel</h2>
                <ul>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li onClick={() => {
                        reg.logout()
                        navManager("/login")
                    }}>Logout
                    </li>
                </ul>
            </div>
            <div className="user-actions">

                <div>
                    <h3>Add Device</h3>
                    <input
                        type="text"
                        placeholder="Device ID"
                        value={AddingDevice}
                        onChange={(e) => setAddDevice(e.target.value)}
                    />
                    <button onClick={addDevice}>Add Device</button>
                </div>


            </div>
            <div className="delete-account-container">
                <h3>Delete Account</h3>
                <button className="delete-account-button" onClick={() => deleteAccount()}>
                    Delete Account
                </button>
            </div>
        </div>
    );
}
