import React, { createContext, useEffect, useState } from "react";
import apiClient from "../apiClient";
import { DeviceDto } from "../models/DeviceDto";

export const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
    const [devices, setDevices] = useState([]);

    const fetchUserDevices = async () => {
        try {
            const response = await apiClient.get("/DevicesDb/DeviceOfUser");

            if (response.status === 200) {
                const devicesList = response.data.map(
                    (device) => new DeviceDto(device.id, device.deviceType)
                );
                setDevices(devicesList);
            } else if (response.status === 204) {
                setDevices(null);
            } else {
                console.error("Error fetching user devices:", response.status);
            }
        } catch (error) {
            if (error.response) {
                console.error(
                    `Error fetching user devices: ${error.response.data.message} (Status: ${error.response.status})`
                );
            } else {
                console.error("Error fetching user devices:", error.message);
            }
        }
    };

    useEffect(() => {
        fetchUserDevices();
    }, []);

    return (
        <DeviceContext.Provider value={{ devices, fetchUserDevices, setDevices }}>
            {children}
        </DeviceContext.Provider>
    );
};