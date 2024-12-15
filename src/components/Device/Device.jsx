import styles from "../UserDevice/UserDevices.module.css";
import React, { useContext } from "react";
import { DeviceContext } from "../../contexts/DeviceContext";
import apiClient from "../../apiClient";

export function Device(props) {
    const { devices, setDevices } = useContext(DeviceContext);

    const removeDevice = async (deviceId) => {
        try {
            const response = await apiClient.post(`/UsersDb/UnbindFrom?deviceId=${deviceId}`);

            if (response.status === 200) {
                const responseData = response.data;

                if (!responseData || responseData.length === 0) {
                    alert('Device list is empty');
                    console.error('Received empty data:', responseData);
                    return;
                }

                setDevices(devices.filter(device => device.id !== deviceId));
                alert('Device removed successfully');
            } else {
                alert(`Error removing device: ${response.status} ${response.statusText}`);
                console.error('Error removing device:', response.status);
            }
        } catch (error) {
            if (error.response) {
                alert(`Error removing device: ${error.response.data.message} (Status: ${error.response.status})`);
            } else {
                alert('An unexpected error occurred while removing the device.');
            }
            console.error('Error removing device:', error);
        }
    };

    return (
        <div>
            <div className={styles.deviceItem} style={{ position: 'relative' }}>
                <button
                    onClick={() => removeDevice(props.device.id)}
                    className={styles.removeButton}
                >
                    &times;
                </button>
                <p>ID: {props.device.id}</p>
                <p>Type: {props.device.deviceType}</p>
            </div>
        </div>
    );
}