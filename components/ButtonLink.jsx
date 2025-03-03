import Link from 'next/link'
import React from 'react'
import { CiGlobe } from "react-icons/ci";
export default function ButtonLink({link}) {
  return (
    <Link href={link} className='px-7 py-2 border border-gray-800 rounded-xl flex gap-2 justify-center hover:border-gray-500 transition-all duration-300'> <p className='text-xl mt-0.5'><CiGlobe/></p> <p>Website</p></Link>
  )
}
