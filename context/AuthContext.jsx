import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const GetAuthContext = createContext()
export const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        const headers = {
            'Authorization': localStorage.getItem('token')
        };
        axios.post('http://127.0.0.1:8000/api/admin/auth-info', { headers: headers }).then(res => {
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