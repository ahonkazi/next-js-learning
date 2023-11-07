"use client"
import { createContext, useState } from "react";
export const GetContext = createContext();
export const GlobalContext = ({ children }) => {
    const menus = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Dashboard', path: '/dashboard' },

    ]
    const [user, setUser] = useState(null);
    return (
        <GetContext.Provider value={{ menus, user, setUser }}>{children}</GetContext.Provider>
    )
}