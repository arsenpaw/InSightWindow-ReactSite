import React, { useContext } from "react";
import styles from "./UserDevices.module.css"; // Import CSS Module
import { getCookie } from "../../contexts/AuthContext";
import { DeviceContext } from "../../contexts/DeviceContext";

export default function UserDevices() {
    const { devices, setDevices } = useContext(DeviceContext);

    const removeDevice = async (deviceId) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_LINK}/api/UsersDb/UnbindFrom?deviceId=${deviceId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${getCookie('token')}`,
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            if (response.status === 200) {
                setDevices(devices.filter(device => device.id !== deviceId));
                alert('Device removed successfully');
            } else {
                console.error('Error removing device:', response.status);
            }
        } catch (error) {
            console.error('Error removing device:', error);
        }
    };

    if (devices === null) {
        return (
            <div className={styles.userDevices}>
                <h2>Your Devices</h2>
                <div className={styles.deviceList}>
                    <div className={styles.deviceItem}>No devices found</div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.userDevices}>
            <h2>Your Devices</h2>
            <div className={styles.deviceList}>
                {devices.map((device, key) => (
                    <div key={key} className={styles.deviceItem} style={{ position: 'relative' }}>
                        <button
                            onClick={() => removeDevice(device.id)}
                            className={styles.removeButton}
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
