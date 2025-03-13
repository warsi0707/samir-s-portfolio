"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const HandleOpenMenu=()=>{
    setOpen(!open)
  }
  return (
    <nav className='fixed top-0 w-full flex items-center justify-between border-b border-b-gray-800 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly'>
      <Link href={"/"} className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold hover:opacity-100 transition-all duration-300'>Samir</Link>
      <ul className=' gap-5 hidden sm:flex'>
        <Link href={"#about"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>About</li></Link>
        <Link href={"#tech"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>Tech</li></Link>
        <Link href={"#project"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>Projects</li></Link>
      </ul>
      <ul className=' gap-5 hidden sm:flex'>
        <Link href={"https://github.com/warsi0707"} className='opacity-60 hover:opacity-100 transition-all duration-300 hover:text-blue-500 text-xl'><FaGithub/></Link>
        <Link href={"https://www.linkedin.com/in/samir-warsi/"} className='opacity-60 hover:opacity-100 transition-all duration-300 hover:text-blue-500 text-xl'><CiLinkedin/></Link>
        <Link href={"https://x.com/Samir_warsi2001"} className='opacity-60 hover:opacity-100 transition-all duration-300 hover:text-blue-500 text-xl'><FaXTwitter/></Link>
      </ul>
      {open? 
        <button onClick={HandleOpenMenu} className='text-white text-2xl opacity-60 hover:opacity-100 cursor-pointer transition-all duration-300 sm:hidden'><RxCross1/></button>: 
        <button onClick={HandleOpenMenu} className='text-white text-2xl opacity-60 hover:opacity-100 cursor-pointer transition-all duration-300 sm:hidden'><FaBars/></button>
      }
      {open && (
        <motion.div 
        initial={{opacity:0, x:100}}
        animate={{opacity:1, x:0}}
        transition={{ease: "linear", duration:0.5}}
        exit={{opacity:0, x:100}}
        className='fixed right-0 top-[84px] sm:hidden  flex h-screen w-1/2 flex-col items-center justify-start gap-10 border-l border-gray-800 bg-black/90 p-12'>
          <ul className='flex flex-col gap-5 items-start'>
            <Link href={"#about"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>About</li></Link>
            <Link href={"#tech"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>Tech</li></Link>
            <Link href={"#project"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>Projects</li></Link>
          </ul>
          <ul className='flex flex-wrap gap-5 '>
            <Link href={"https://github.com/warsi0707"} className='opacity-60 hover:opacity-100 transition-all duration-300 hover:text-blue-500 text-xl'><FaGithub/></Link>
            <Link href={"https://www.linkedin.com/in/samir-warsi/"} className='opacity-60 hover:opacity-100 transition-all duration-300 hover:text-blue-500 text-xl'><CiLinkedin/></Link>
            <Link href={"https://x.com/Samir_warsi2001"} className='opacity-60 hover:opacity-100 transition-all duration-300 hover:text-blue-500 text-xl'><FaXTwitter/></Link>
          </ul>
        </motion.div>
      )}
    </nav>
  )
}
