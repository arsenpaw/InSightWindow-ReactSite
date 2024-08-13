import React, {createContext, useEffect, useState} from 'react';
import {jwtDecode} from "jwt-decode";

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
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const setAdminStatusFromJwtToken = () => {
        try {
            const decodedToken = jwtDecode(getCookie('token'));
            const roleClaim = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
            if (decodedToken[roleClaim] === "Admin") {
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
        const refreshToken = getCookie('refresh-token');
        if (refreshToken) {
            refreshAccessToken(refreshToken);
        }
    }, []);

    const refreshAccessToken = async (refreshToken) => {
        try {
            const body = await fetch(`${process.env.REACT_APP_LINK}/api/Auth/refresh-tokens`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'refresh-token': refreshToken,
                },
                credentials: 'include'
            })
            if (body.ok) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);

            }
        } catch (e) {
            console.log(e);
        }

    };

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout, isAdmin}}>
            {children}
        </AuthContext.Provider>
    );
};
