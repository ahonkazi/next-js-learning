"use client"
import axios from 'axios';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState(null)
    const router = useRouter();
    const handleLogin = () => {
        axios.post('http://127.0.0.1:8000/api/admin/login', { 'email': email, 'password': password })
            .then(res => {

                if (res?.data?.status === true) {
                    localStorage.setItem('token', "Bearer " + res.data.data.token);
                    localStorage.setItem('user', "Bearer " + res.data.data.user);

                }

            }
            ).then(res => {
                location.href = "/dashboard"
            }
            )
            .catch(function (err) {
                if (err?.response?.status === 400) {
                    setValidationErrors(err.response.data)
                    if (err.response.data.status === 'password') {
                        setValidationErrors({ errors: { password: ['Incorrect password'] } })
                    }

                }
                if (err?.response?.status === 404) {
                    if (err.response.data.status === 'email') {
                        setValidationErrors({ errors: { email: ['Incorrect email'] } })
                    }
                }

                console.log(err.response)
            })
    }

    return (
        <div className='flex pt-[100px] justify-center '>
            <div className="box w-[300px] bg-gray-100 p-4 h-fit flex flex-col gap-2">
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' className='px-4 py-2 border rounded w-full' type="email" name="" id="" />
                {validationErrors?.errors?.email && (
                    <p className='text-red-500'>{validationErrors?.errors?.email[0]}</p>

                )

                }
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' className='px-4 py-2 border rounded w-full' type="password" name="" id="" />
                {
                    validationErrors?.errors?.password && (
                        <p className='text-red-500'>{validationErrors?.errors?.password[0]}</p>

                    )
                }
                < button onClick={handleLogin} className='w-full bg-rose-500 text-white py-2'>Login</button>

            </div>
        </div >
    )
}


export default LoginPage