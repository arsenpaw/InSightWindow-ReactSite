import React, {useEffect, useState,createContext} from "react";
import "./UserDevices.css";
import {getCookie} from "../AuthContext";
import {DeviceDto} from "../models/DeviceDto";

export const DeviceContext = createContext();
export default function UserDevices() {

    const [devices, setDevices] = useState([]);
    useEffect(() => {
        async function fetchUserDevices() {
            try {
                const response = await fetch(`${process.env.REACT_APP_LINK_LOCAL}/api/DevicesDb/DeviceOfUser`, {
                    method: 'GET', headers: {

                        'Authorization': `Bearer ${getCookie('token')}`, 'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });
                if (response.status === 200) {
                    const data = await response.json();
                    const devicesList = data.map(device => new DeviceDto(device.id, device.deviceType));
                    setDevices(devicesList);
                } else if (response.status === 204) {
                    setDevices(null);
                } else {
                    console.error('Error fetching user devices:', response.status);

                }
            } catch (error) {
                console.error('Error fetching user devices:', error);
            }
        }

        fetchUserDevices();
    }, []);

    if (devices === null) {
        return (<div className="user-devices">
            <h2>Your Devices</h2>
            <div className="device-list">
                <div className="device-item">No devices found</div>
            </div>
        </div>);
    }

    return (<div className="user-devices">
            <h2>Your Devices</h2>
            <div className="device-list">
                <div className="device-list">
                    {devices.map((device, key) => (<div key={key} className="device-item">
                        <p>ID: {device.id}</p>
                        <p>Type: {device.deviceType}</p>
                    </div>))}
                </div>
            </div>
        </div>

    );
}