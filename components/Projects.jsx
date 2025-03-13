'use client'
import React from 'react'
import Card from './Card'
export default function Projects() {
  return (
    <div id='project'>
    <h1 className='text-4xl font-light text-white md:text-6xl flex justify-center mb-10'>Projects</h1>
      <div className="flex flex-col gap-10 justify-center  max-w-[900px] mx-auto ">
        <Card title={"Airbnb"} image={"/airbnb.png"} about={""} links={"https://airbnb-2-eram.onrender.com/"} react={"react"} mongoDB={"mongoDB"} express={"Express"} tailwind={"tailwind"}/>
        <Card title={"Brainly"} image={"/brainly.png"} about={"A second brain that store your daily basis links"}  react={"react"} mongoDB={"mongoDB"} express={"Express"} tailwind={"tailwind"} linkss={"https://brainly-0ui5.onrender.com/"}/>
        <Card title={"Real eState"} image={"/realstate.png"} about={"A app that sell, buy or rent your property"} react={"react"} mongoDB={"mongoDB"} express={"Express"} tailwind={"tailwind"} links={"https://real-estate-td15.onrender.com/"}/>
        <Card title={"100xDevs"} image={"/realstate.png"} about={"A app that sell, a course"} react={"react"} mongoDB={"mongoDB"} express={"Express"} tailwind={"tailwind"} links={"https://one00xdevs-1fe.onrender.com/"}/>
      </div>    
  </div>
  )
}
