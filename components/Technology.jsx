import React from 'react'

export default function Technology({icon, title}) {
  return (
    <div className='bg-white text-black flex gap-1 sm:gap-2 justify-center px-2 sm:px-5 text-center sm:text-xl font-bold rounded-md py-1'>
        <p className='mt-1'>{icon}</p>
        <h1>{title}</h1>
    </div>
  )
}
