"use client"
import React, { useState, useEffect } from 'react'
import LoadingPage from '../shared/pages/LoadingPage'
import { redirect } from 'next/navigation';
import axios from 'axios';
axios.defaults.headers.common = { 'Authorization': localStorage.getItem('token') };
const AuthLess = ({ children }) => {
    const [authInfo, setAuthInfo] = useState({ loading: true, auth: false });
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/admin/auth-info').then(res => {
            if (res?.data?.role === 'Admin') {
                setAuthInfo({ loading: false, auth: true })
            }
            console.log(res.data);
        }).catch(err => {
            if (err?.response?.data?.status === false) {
                setAuthInfo({ loading: false, auth: false })
            }
        })
    }, [])

    if (authInfo.loading) {
        return <LoadingPage />
    }
    if (authInfo.loading === false && authInfo.auth === false) {
        return children;
    }
    redirect('/dashboard');
}

export default AuthLess