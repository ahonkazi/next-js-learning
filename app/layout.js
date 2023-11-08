"use client"
import axios from 'axios'
import './globals.css'
import Header from '../shared/components/Header'
import { AuthContext } from '../context/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>NextJs</title>
      <body>
        <AuthContext>
          <Header />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
