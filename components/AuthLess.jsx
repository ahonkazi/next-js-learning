"use client"
import React, { useContext } from 'react'
import LoadingPage from '../shared/pages/LoadingPage'
import { redirect } from 'next/navigation';
import { GetAuthContext } from '../context/AuthContext';
const AuthLess = ({ children }) => {
    const authContext = useContext(GetAuthContext);

    if (authContext.loading) {
        return <LoadingPage />
    }

    if (authContext.auth) {
        redirect('/dashboard');
    } else {
        return children;
    }

}


export default AuthLess