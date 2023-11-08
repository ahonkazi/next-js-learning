import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const GetAuthContext = createContext()
axios.defaults.headers.common = { 'Authorization': localStorage.getItem('token') };

export const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/admin/auth-info').then(res => {
            setAuth(true);
            setLoading(false);
        }).catch(err => {
            setLoading(false);

        })
    }, [])

    return (
        <GetAuthContext.Provider value={{ loading, auth }}>
            {children}
        </GetAuthContext.Provider>
    )
}