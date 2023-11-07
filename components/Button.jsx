import React from 'react'

const Button = ({ children }) => {
    return (
        <button className='px-4 py-2 bg-rose-500 text-white'>{children}</button>
    )
}

export default Button