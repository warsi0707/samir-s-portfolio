"use client"
import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from 'framer-motion';

export default function Technology() {
  return (
    <>
       <motion.div 
        initial= {{opacity:0, y:-50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
        id='tech' 
        className='max-w-[900px] sm:mx-auto h-[60vh]  flex flex-col mx-10 mt-20'>
        <h1 className='text-4xl font-light text-white md:text-6xl flex justify-center'>Technologies</h1>
          <div className='flex flex-wrap gap-5 mx-auto justify-between mt-10'>
            <p className={'text-6xl text-yellow-400 cursor-pointer transition-all duration-300 hover:-translate-y-5'}><FaJs/></p>
            <p className={'text-6xl text-blue-400 cursor-pointer transition-all duration-300 hover:-translate-y-5'}><RiTailwindCssFill/></p>
            <p className={'text-6xl text-sky-400 cursor-pointer transition-all duration-300 hover:-translate-y-5'}><FaReact/></p>
            <p className={'text-6xl text-white cursor-pointer transition-all duration-300 hover:-translate-y-5'}><RiNextjsFill/></p>
            <p className={'text-6xl text-slate-400 cursor-pointer transition-all duration-300 hover:-translate-y-5'}><SiExpress/></p>
            <p className={'text-6xl text-green-400 cursor-pointer transition-all duration-300 hover:-translate-y-5'}><DiMongodb/></p>
            <p className={'text-6xl text-blue-400 cursor-pointer transition-all duration-300 hover:-translate-y-5'}><BiLogoPostgresql/></p>
            <p className={'text-6xl text-cyan-800 cursor-pointer transition-all duration-300 hover:-translate-y-5'}><SiPrisma/></p>
            <p className={'text-6xl text-red-400 cursor-pointer transition-all duration-300 hover:-translate-y-5'}><SiJsonwebtokens/></p>
          </div>
        </motion.div>
    </>
  )
}
