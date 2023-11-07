import React from 'react'

const loading = () => {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-rose-500 flex items-center justify-center'>
            <div className="box">
                <h1 className='text-3xl text-white'>Loading...</h1>
            </div>
        </div>)
}

export default loading