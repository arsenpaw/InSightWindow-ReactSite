import React, { useContext } from "react";
import styles from "./UserDevices.module.css"; // Import CSS Module
import { getCookie } from "../../contexts/AuthContext";
import { DeviceContext } from "../../contexts/DeviceContext";
import {Device} from "../Device/Device";

export default function UserDevices() {
    const { devices, removeDevice } = useContext(DeviceContext);



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
                {devices.map((deviceMap, key) => (
                     <Device key={key} device={deviceMap} />
                ))}
            </div>
        </div>
    );
}
