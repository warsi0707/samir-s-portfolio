import React from 'react'

export default function Education({link, university, degree, year}) {
  return (
    <div className='mb-10 px-5 md:px-0'>
      {/* <h1 className='text-3xl mb-5 text-start'>Education</h1> */}
      <div className='flex justify-between'>
        <div className='flex gap-2 sm:gap-5'>
            <div>
                <img className='h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover' src={link} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-lg sm:text-2xl font-bold'>{university}</h1>
                <p className='text- sm:text-lg'>{degree}</p>
            </div>
        </div>
        <p className='text-center text-sm sm:text-lg mt-4'>{year}</p>
      </div>
    </div>
  )
}
