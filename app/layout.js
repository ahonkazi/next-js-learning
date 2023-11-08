"use client"
import axios from 'axios'
import './globals.css'
import Header from '../shared/components/Header'
import { AuthContext } from '../context/AuthContext';
// axios.defaults.headers.common = { 'Authorization': localStorage.getItem('token') };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>NextJs</title>
      <body>
        <AuthContext>
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
