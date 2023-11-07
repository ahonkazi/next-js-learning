"use client"

import Link from 'next/link'
import React, { useContext } from 'react'
import { PrivateComponent } from '../../components/PrivateRoute'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()
    const handleLogout = () => {
        axios.post('http://127.0.0.1:8000/api/admin/logout').then(res => {
            if (res.data.status) {
                localStorage.removeItem('token');
                location.href = "/"
            }
        }).catch(err => {
            console.log(err.response)

        })
    }
    return (
        <header className='bg-slate-800 py-2 px-8 text-white '>
            <nav className='flex justify-end'>
                <ul className='flex items-center gap-2'>


                    <li className='px-4 bg-slate-600'>
                        <Link className='text-lg' href='/'>Home</Link>
                    </li>

                    <PrivateComponent authLessComponent={
                        <li className='px-4 bg-slate-600'>
                            <Link className='text-lg' href='/login'>Login</Link>
                        </li>
                    }>
                        <li className='px-4 bg-slate-600'>
                            <Link className='text-lg' href='/dashboard'>Dashboard</Link>
                        </li>
                        <li className='px-4 bg-slate-600'>
                            <button onClick={() => handleLogout()} className='text-lg'>Logout</button>
                        </li>

                    </PrivateComponent>



                </ul>
            </nav>
        </header>
    )
}

export default Header