import React from 'react'

export const Button = ({ children }) => {
    return (
        <button className='px-5 py-2 text-white font-medium rounded-md bg-green-500 hover:bg-green-600'>
            {children}
        </button>
    )
}