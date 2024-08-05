import React, {useEffect, useState, createContext, useContext} from "react";
import "./UserDevices.css";
import {getCookie} from "../contexts/AuthContext";
import {DeviceDto} from "../models/DeviceDto";
import {DeviceContext, DeviceProvider} from "../contexts/DeviceContext";


export default function UserDevices(){

    const { devices,setDevices } = useContext(DeviceContext);
    const removeDevice = async (deviceId) => {
          try {
                const response = await fetch(`${process.env.REACT_APP_LINK_LOCAL}/api/UsersDb/UnbindFrom?deviceId=${deviceId}`, {
                    method: 'Post', headers: {

                        'Authorization': `Bearer ${getCookie('token')}`, 'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });
                if (response.status === 200) {
                    setDevices(devices.filter(device => device.id !== deviceId));
                    alert('Device removed successfully');
                } else {
                    console.error('Error fetching user devices:', response.status);

                }
            } catch (error) {
                console.error('Error fetching user devices:', error);
            }

    };

    if (devices === null) {
        return (<div className="user-devices">
            <h2>Your Devices</h2>
            <div className="device-list">
                <div className="device-item">No devices found</div>
            </div>
        </div>);
    }

    return (
        <div className="user-devices">
            <h2>Your Devices</h2>
            <div className="device-list">
                {devices.map((device, key) => (
                    <div key={key} className="device-item" style={{ position: 'relative' }}>
                        <button
                            onClick={() => removeDevice(device.id)}
                            className="remove-button"
                        >
                            &times;
                        </button>
                        <p>ID: {device.id}</p>
                        <p>Type: {device.deviceType}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}