import React, {createContext, useEffect, useState} from 'react';

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

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
        deleteAllCookies();
    };

     useEffect(() => {
    const refreshToken = getCookie('refresh-token');
    const token = getCookie('token');
    if (refreshToken) {
      refreshAccessToken(refreshToken,token);
    }
  }, []);

     const refreshAccessToken = async (refreshToken,token) => {
       const body = await  fetch(`${process.env.REACT_APP_LINK_LOCAL}/api/Auth/refresh-tokens`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'refresh-token': refreshToken,
           'Authorization': `Bearer ${token}`,
        },
         credentials: 'include'})
        if (body.ok) {
          setIsLoggedIn(true);
        }
        else {
            setIsLoggedIn(false);

        }
  };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
