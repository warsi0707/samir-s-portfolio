import React from 'react'
export default function Greet() {
  return (
    <div className='flex  justify-center mt-10 sm:w-[700px] mx-auto mb-20'>
        <div className='flex flex-col sm:px-10  sm:flex-row md:flex-col space-y-5 '>
           <img className='w-32 h-32 mx-auto rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1740453877231-288913a46e0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" alt="" />
           <div className='flex text-center flex-col mx-auto text-3xl md:text-5xl gap-5'>
              <h1>Hi, I'm</h1>
              <h1 className=''>Samir Warsi &#128075;</h1>
           </div>
           <div className='w-full px-5 text-xl sm:text-2xl mx-auto text-center text-gray-500'>
            <p>Software developer with passion for building impactful web solution. Always learning, always creating</p>
           </div>
        </div>
    </div>
  )
}
