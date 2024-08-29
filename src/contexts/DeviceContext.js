import React, {createContext, useEffect, useState} from "react";
import {getCookie} from "./AuthContext";
import {DeviceDto} from "../models/DeviceDto";

export const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
    const [devices, setDevices] = useState([]);

    const fetchUserDevices = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_LINK}/api/DevicesDb/DeviceOfUser`, {
                method: 'GET', headers: {
                    'Authorization': `Bearer ${getCookie('token')}`, 'Content-Type': 'application/json',
                }, credentials: "include",
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
    };

    useEffect(() => {
        fetchUserDevices();
    }, []);

    return (
        <DeviceContext.Provider value={{ devices, fetchUserDevices , setDevices}}>
            {children}
        </DeviceContext.Provider>
    );
};