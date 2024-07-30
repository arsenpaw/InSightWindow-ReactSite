import React from "react";
import {DeviceDto} from "../models/DeviceDto";

export default function UserDevices(props) {
    if (props.devicesList === undefined) {
        return (<div className="user-devices">
            <h2>Your Devices</h2>
            <div className="device-list">
                <div className="device-item">No devices found</div>
            </div>
        </div>);
    }
    console.log(props.devicesList)
    const devicesList = props.devicesList;

    return (<div className="user-devices">
            <h2>Your Devices</h2>
            <div className="device-list">
                <div className="device-list">
                    {devicesList.map((device, key) => (<div key={key} className="device-item">
                            <p>ID: {device.id}</p>
                            <p>Type: {device.deviceType}</p>
                        </div>))}
                </div>
            </div>
        </div>

    );
}