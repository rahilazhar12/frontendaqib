// Context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { toast } from "react-hot-toast";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(() => {
        // Get the user data from local storage on initial load
        try {
            const storedData = sessionStorage.getItem('user');
            return storedData ? JSON.parse(storedData) : null;
        } catch {
            return null;
        }
    });

    const login = (data) => {
        try {
            // Save the user data in local storage
            sessionStorage.setItem('user', JSON.stringify(data));
            setAuthData(data);
            toast.success("Login successful");
        } catch (error) {
            // Handle the error, possibly log it or display a message to the user
            console.error("Login error:", error);
            toast.error("Login failed");
        }
    };


    const logout = (data) => {
        // Remove the user data from local storage and update state
        sessionStorage.removeItem('user');
        localStorage.removeItem('user')
        toast.success("Logout successful");
        setAuthData(null);
    };

    return (
        <AuthContext.Provider value={{ authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
