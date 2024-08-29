import styles from "../UserDevice/UserDevices.module.css";
import React, {useContext} from "react";
import {getCookie} from "../../contexts/AuthContext";
import {DeviceContext} from "../../contexts/DeviceContext";

export function Device(props) {
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

  return (
      <div>
          <div  className={styles.deviceItem} style={{position: 'relative'}}>
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