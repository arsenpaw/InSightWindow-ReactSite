import './UserDetails.css';
import UserPanel from "../UserPanel";
import UserDevices from "../UserDevices";
import React, {useState, useEffect} from 'react';
import {DeviceDto} from "../../models/DeviceDto";
import {getCookie} from "../../AuthContext";




export default function UserDetails() {
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
                }
                else if( response.status === 204) {
                    const devicesList = [];
                    setDevices(devicesList);
                }
                else {
                    console.error('Error fetching user devices:', response.status);

                }
            } catch (error) {
                console.error('Error fetching user devices:', error);
            }
        }

        fetchUserDevices();
    }, []);

    return (<div className="app">
        <UserPanel/>
        <UserDevices devicesList={devices}/>
    </div>);
}