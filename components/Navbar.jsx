"use client"
import Link from 'next/link';
import React, { useState } from 'react'


export default function Navbar() {
  const navMenu = ["Home", "About", "Skills", "Projects", "Education", "Contact"]
  const [activeNav, setActiveNav] = useState(navMenu[0])

  return (
    <nav className='z-50 mx-auto fixed top-5 flex justify-center rounded-4xl w-full px-2'>
      <div className='bg-black text-white w-full md:w-[600px] rounded-4xl flex justify-between p-2'>
        {navMenu.map((navs, indx)=> (
          <Link href={`#${navs}`} onClick={()=>setActiveNav(navs)}  key={indx} className={`${activeNav === navs? "bg-white text-black":"text-white" } p-1 md:px-3 text-md rounded-full flex items-center text-center cursor-pointer`} >{navs}</Link>
        ))}
      </div>
    </nav>
  )
}
