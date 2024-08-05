import './UserDetails.css';
import UserPanel from "../UserPanel";
import UserDevices from "../UserDevices";
import React, {createContext, useEffect, useState} from 'react';
import {DeviceProvider} from "../../contexts/DeviceContext";


export default function UserDetails() {


    return (<div className="all-user-info">
        <DeviceProvider>
        <UserPanel />
        <UserDevices  />
        </DeviceProvider>
    </div>);
}