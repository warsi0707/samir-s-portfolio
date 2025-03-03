import React from 'react'
import CardTech from './CardTech'
import ButtonLink from './ButtonLink'
import Link from 'next/link'
import { CiGlobe } from "react-icons/ci";
export default function Card({image, title, about, link,react, express,mongoDB,tailwind}) {
  return (
    <div className='w-96 rounded-2xl  border border-gray-500 p-5'>
        <div>
            <img className='w-full h-40' src={image} alt="" />
        </div>
        <div className='mt-10 mb-3'>
            <h1 className='text-2xl text-center mb-2'>{title}</h1>
            <p className='text-gray-300 text-center'>{about}</p>
        </div>
        <div className='flex flex-wrap gap-1 space-y-1 mb-5'>
        {react && <p className='bg-gray-800 text-center px-3 py-0.5 rounded-xl'>{react}</p>}
        {express &&  <p className='bg-gray-800 text-center px-3 py-0.5 rounded-xl'>{express}</p> }
        {mongoDB &&  <p className='bg-gray-800 text-center px-3 py-0.5 rounded-xl'>{mongoDB}</p> }
        {tailwind &&  <p className='bg-gray-800 text-center px-3 py-0.5 rounded-xl'>{tailwind}</p> }
       
        
        </div>
        <div className='flex justify-center'>
        <Link href={`${link}`} className='px-7 py-2 border border-gray-800 rounded-xl flex gap-2 justify-center hover:border-gray-500 transition-all duration-300'> <p className='text-xl mt-0.5'><CiGlobe/></p> <p>Website</p></Link>
        </div>
      

    </div>
  )
}
