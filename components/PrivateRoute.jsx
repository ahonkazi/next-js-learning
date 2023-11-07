"use client"
import React, { useState, useEffect } from 'react'
import LoadingPage from '../shared/pages/LoadingPage'
import { redirect } from 'next/navigation';
import axios from 'axios';
axios.defaults.headers.common = { 'Authorization': localStorage.getItem('token') };
const PrivateRoute = ({ children }) => {
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

  if (loading) {
    return <LoadingPage />
  }

  if (auth && !loading) {
    return children;
  } else {
    redirect('/login')

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
      console.log(res.data);
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

