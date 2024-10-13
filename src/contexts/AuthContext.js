import React, {createContext, useEffect, useState} from 'react';
import {jwtDecode} from "jwt-decode";
import {RefreshTokenRequest} from "../models/RefreshTokenRequest";
import {SlBookOpen} from "react-icons/sl";

export function deleteAllCookies() {
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    });
}

export const getCookie = name => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    if (match) {
        return decodeURIComponent(match[2]);
    }
    return null;
};

export const getJwtToken = () => {
    let token = getCookie('token')
    console.log(token)
    return token
}
export const getRefreshToken = () => {
    let token = getCookie('refresh-token')
    console.log(token)
    return token
}
export function setCookie(name,value,hours) {
    var expires = "";
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const setAdminStatusFromJwtToken = () => {
        try {
            const decodedToken = jwtDecode(getCookie('token'));
            console.log(decodedToken['role']);
            if (decodedToken['role'] === "Admin") {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        } catch (e) {
            console.error(e);
        }
    };
    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
        deleteAllCookies();

    };
    useEffect(() => {
        setAdminStatusFromJwtToken();
    }, [isLoggedIn]);
    useEffect(() => {
        const refreshToken = getRefreshToken();
        if (refreshToken) {
            refreshAccessToken();
        }
    }, []);

    const refreshAccessToken = async () => {
        try {
            const body = new RefreshTokenRequest(getJwtToken(),getRefreshToken())
            console.log(body)
            const response = await fetch(`${process.env.REACT_APP_LINK}/api/Auth/RefreshToken`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body:JSON.stringify(body)
            })
            if (response.ok) {
                const responseData = await response.json();

                setCookie('token', responseData.accessToken,process.env.TOKEN_DEADLINE);
                setCookie('refresh-token',responseData.refreshToken,process.env.REFRESH_TOKEN_DEADLINE);
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);

            }
        } catch (e) {
            console.error(e);
        }

    };

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout, isAdmin}}>
            {children}
        </AuthContext.Provider>
    );
};
