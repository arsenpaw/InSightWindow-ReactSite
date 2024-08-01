import './UserDetails.css';
import UserPanel from "../UserPanel";
import UserDevices from "../UserDevices";
import {useState} from "react";




export default function UserDetails() {


    return (<div className="all-user-info">
        <UserPanel />
        <UserDevices  />
    </div>);
}