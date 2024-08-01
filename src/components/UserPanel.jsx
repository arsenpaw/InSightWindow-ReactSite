import React, {useState, useEffect, useContext} from "react";
import imgLogo from "../assets/axIcon.png";
import "./UserPanel.css";
import {AuthContext, getCookie} from "../AuthContext";
import {useNavigate} from 'react-router-dom';
export default function UserPanel(props) {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [deviceName, setDeviceName] = useState("");
    const reg = useContext(AuthContext);
    const   navManager = useNavigate();
    const handleChangeAccountInfo = (e) => {
        const { name, value } = e.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    const updateAccountInfo = () => {
        setUsers(users.map(u => (u.id === currentUser.id ? currentUser : u)));
    };

    const deleteAccount = async  () => {

        const requestOptions = {
            method: 'POST',
           headers: {
                        'Authorization': `Bearer ${getCookie('token')}`, 'Content-Type': 'application/json',
                    },
            credentials: 'include',
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_LINK_LOCAL}/api/UsersDb/concreteUser`, requestOptions);
            if (response.ok) {
                alert('Account deleted successful:', response.status);
                reg.logout()
                navManager("/main");

            } else {
                alert('Delete account failed:', response.status);

            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const addDevice = () => {
        console.log(`Device added: ${deviceName}`);
        setDeviceName("");
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
                    }}>Logout</li>
                </ul>
            </div>
            <div className="user-actions">

                <div>
                    <h3>Add Device</h3>
                    <input
                        type="text"
                        placeholder="Device ID"
                        value={deviceName}
                        onChange={(e) => setDeviceName(e.target.value)}
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
