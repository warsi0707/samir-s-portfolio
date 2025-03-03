import Link from 'next/link';
import React from 'react'
import { FiHome } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
export default function Navbar() {
  return (
    <div className=' bg-gray-900  p-2 text-xl rounded-xl max-w-96 mx-auto mt-5 flex justify-evenly'>
        <Link href={"/"} className='hover:bg-gray-800 p-3 rounded-full  transition duration-300  hover:-translate-y-2' >{<FiHome/>}</Link>
        <Link href={"https://github.com/warsi0707"} className='hover:bg-gray-800 p-3 rounded-full  transition duration-300  hover:-translate-y-2' >{<FaGithub/>}</Link>
        <Link href={"https://www.linkedin.com/in/samir-warsi/"} className='hover:bg-gray-800 p-3 rounded-full  transition duration-300  hover:-translate-y-2' >{<CiLinkedin/>}</Link>
        <Link href={"https://x.com/Samir_warsi2001"} className='hover:bg-gray-800 p-3 rounded-full  transition duration-300  hover:-translate-y-2' >{<FaXTwitter/>}</Link>
        {/* <Link href={"#"} className='hover:bg-gray-800 p-3 rounded-full  transition duration-300  hover:-translate-y-2' >{<CiMail/>}</Link> */}
    </div>
  )
}
