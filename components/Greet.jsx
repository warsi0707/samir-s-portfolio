'use client'
import React from 'react'
import { motion } from 'framer-motion'
export default function Greet() {
  return (
    <div className='flex px-16 md:px-32 pt-40 w-full items-center justify-center py-28 mx-auto '>
        <motion.div
        initial={{ y:-50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.8,delay:0.2}}
        className='flex flex-col shadow-2xl sm:px-16  sm:flex-row md:flex-col space-y-5 '>
           <img className='w-[300px] h-[300px] cursor-pointer mx-auto rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 object-fill' src="/samir2.jpg" alt="" />
           <motion.div 
            initial={{ y:80, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration: 0.8,delay:0.2}}
           className='flex max-w-[600px] flex-col mx-auto justify-center text-center gap-3'>
           <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl md:text-7xl font-light'>Samir Warsi</h1>
           <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-xl md:text-3xl font-light' >Web Developer</h3>
           <p className='md:text-base text-pretty text-sm text-gray-400'>Software developer with passion for building impactful web solution. Always learning, always creating</p>
           </motion.div>
        </motion.div>
    </div>
  )
}
