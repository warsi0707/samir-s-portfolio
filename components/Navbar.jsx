"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { FiHome } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const HandleOpenMenu=()=>{
    setOpen(!open)
  }
  return (
    <nav className='fixed top-0 w-full flex items-center justify-between border-b border-b-gray-800 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly'>
      <Link href={"#"} className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold hover:opacity-100 transition-all duration-300'>Samir</Link>
      <ul className=' gap-5 hidden sm:flex'>
      <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>Home</li></Link>
      <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>Tech</li></Link>
      <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>Projects</li></Link>
      <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>Contact</li></Link>
      </ul>
     

      <ul className=' gap-5 hidden sm:flex'>
      <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300 hover:text-blue-500 text-xl'><FaGithub/></Link>
      <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300 hover:text-blue-500 text-xl'><CiLinkedin/></Link>
      <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300 hover:text-blue-500 text-xl'><FaXTwitter/></Link>
      </ul>
      {open? 
      <button onClick={HandleOpenMenu} className='text-white text-2xl opacity-60 hover:opacity-100 cursor-pointer transition-all duration-300 sm:hidden'><RxCross1/></button>: 
      <button onClick={HandleOpenMenu} className='text-white text-2xl opacity-60 hover:opacity-100 cursor-pointer transition-all duration-300 sm:hidden'><FaBars/></button>
      }
      {open && (
        <div className='fixed right-0 top-[84px] sm:hidden  flex h-screen w-1/2 flex-col items-center justify-start gap-10 border-l border-gray-800 bg-black/90 p-12'>
          <ul className='flex flex-col gap-5 items-start'>
            <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>Home</li></Link>
            <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>Tech</li></Link>
            <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>Projects</li></Link>
            <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300'><li>Contact</li></Link>
          </ul>
          <ul className='flex flex-wrap gap-5 '>
            <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300 hover:text-blue-500 text-xl'><FaGithub/></Link>
            <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300 hover:text-blue-500 text-xl'><CiLinkedin/></Link>
            <Link href={"#home"} className='opacity-60 hover:opacity-100 transition-all duration-300 hover:text-blue-500 text-xl'><FaXTwitter/></Link>
          </ul>
        </div>
      )}
    </nav>
  )
}
