import imgLogo from "../assets/axIcon.png";
import React from "react";

export default function UserPanel(props) {
    console.log(props.isAdmin)
    return (
        <div className="user-menu">
            <img src={imgLogo} alt="Logo" className="user-logo"/>
            <h2>User Panel</h2>
            <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </div>
    );
}