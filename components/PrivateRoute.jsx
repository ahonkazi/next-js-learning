"use client"
import React, { useState, useEffect, useContext } from 'react'
import LoadingPage from '../shared/pages/LoadingPage'
import { redirect } from 'next/navigation';
import axios from 'axios';
import { GetAuthContext } from '../context/AuthContext';
axios.defaults.headers.common = { 'Authorization': localStorage.getItem('token') };
const PrivateRoute = ({ children }) => {
  const authContext = useContext(GetAuthContext);


  if (authContext.loading) {
    return <LoadingPage />
  }

  if (authContext.loading === false) {
    if (authContext.auth) {
      return children;
    } else {
      redirect('/login')

    }

  }
}
export default PrivateRoute

export const PrivateComponent = ({ children, loadingComponent = "", authLessComponent = "" }) => {
  const [authInfo, setAuthInfo] = useState({ loading: true, auth: false });
  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/admin/auth-info').then(res => {
      if (res?.data?.role === 'Admin') {
        setAuthInfo({ loading: false, auth: true })
      }
      // console.log(res.data);
    }).catch(err => {
      if (err?.response?.data?.status === false) {
        setAuthInfo({ loading: false, auth: false })
      }
    })
  }, [])

  if (authInfo.loading) {
    return loadingComponent;
  }
  if (authInfo.loading === false && authInfo.auth === false) {
    return authLessComponent;
  }
  return children;

}

