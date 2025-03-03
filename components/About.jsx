import React from 'react'

export default function About() {
  return (
    <div className='flex flex-col px-5 sm:px-2 w-full mb-20'>
      <h1 className='text-3xl text-center sm:text-start mb-8'>About Me</h1>
      <div className='space-y-2 text-center sm:text-start  sm:text-lg text-gray-400'>
        <p>I'm a passionate developer with a BTech in Engineering, eager to launch my career as a <strong className='text-white'>Frontend, React, or Fullstack Developer</strong>. </p>
        <p>Proficient in <strong className='text-white'>HTML, CSS, JavaScript, React, Next.js, Tailwind, Node, Express, MongoDB, PostgreSQL, Prisma, NextAuth, JWT, and cookies, </strong>  I build modern, scalable web apps.</p>
        <p>My projects include an <strong className='text-white'>Airbnb Clone , Real Estate Management System , Brainly-inspired, and a Course Selling App</strong>. I combine clean code with user-centric design to solve real-world problems.</p>
      </div>
      
    </div>
  )
}
