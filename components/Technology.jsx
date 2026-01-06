"use client"
import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from 'framer-motion';
import { SiRedux } from "react-icons/si";
import TechCard from './TechCard';
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa6";




export default function Technology() {
  return (
    <>
       <motion.div 
        initial= {{opacity:0, y:0}}
        whileInView={{opacity:1, y:-50}}
        transition={{duration:1}}
        id='Skills' 
        className='max-w-[900px] sm:mx-auto py-32  flex flex-col mx-10 pt-52 '>
        <h1 className='text-4xl font-light text-white md:text-6xl flex justify-center'>Technologies</h1>
          <div className='flex flex-wrap gap-5 mx-auto justify-between mt-10'>
            <TechCard label={"Javascript"} icon={<FaJs/>}/>
            <TechCard label={"TypeScript"} icon={<SiTypescript/>}/>
            <TechCard label={"Node"} icon={<FaNode/>}/>
            <TechCard label={"Tailwind"} icon={<RiTailwindCssFill/>}/>
            <TechCard label={"React"} icon={<FaReact/>}/>
            <TechCard label={"Redux-Toolkit"} icon={<SiRedux/>}/>
            <TechCard label={"Next.js"} icon={<RiNextjsFill/>}/>
            <TechCard label={"Express.js"} icon={<SiExpress/>}/>
            <TechCard label={"MongoDB"} icon={<DiMongodb/>}/>
            {/* <TechCard label={"Prisma"} icon={<SiPrisma/>}/> */}
            <TechCard label={"JWT"} icon={<SiJsonwebtokens/>}/>
          </div>
        </motion.div>
    </>
  )
}
