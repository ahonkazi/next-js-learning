"use client"

import Link from 'next/link'
import React, { useContext } from 'react'

const Header = () => {
    return (
        <header className='bg-slate-800 py-2 px-8 text-white '>
            <nav className='flex justify-end'>
                <ul className='flex items-center gap-2'>


                    <li className='px-4 bg-slate-600'>
                        <Link className='text-lg' href='/'>Home</Link>
                    </li>
                    <li className='px-4 bg-slate-600'>
                        <Link className='text-lg' href='/dashboard'>Dashboard</Link>
                    </li>


                </ul>
            </nav>
        </header>
    )
}

export default Header