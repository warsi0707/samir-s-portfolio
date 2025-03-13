'use client'
import React from 'react'
import Card from './Card'
export default function Projects() {
  return (
    <div id='project'>
    <h1 className='text-4xl font-light text-white md:text-6xl flex justify-center mb-10'>Projects</h1>
      <div className="flex flex-col gap-10 justify-center  max-w-[900px] mx-auto ">
        <Card title={"Airbnb"} image={"/airbnb.png"} about={"A full-stack web app built with React, Tailwind CSS, Express, Mongoose, and JWT. Users can log in, book listings, leave reviews, and publish their own listings as owners. Features secure authentication, responsive design, and seamless booking functionality"} links={"https://airbnb-2-eram.onrender.com/"} react={"react"} mongoDB={"MongoDB"} express={"Express"} tailwind={"tailwind"} jwt={"JWT"}/>
        <Card title={"Brainly"} image={"/brainly.png"} about={"A second brain that store your daily basis links like your tweets, youtube links and your daily text that rember you"}  react={"react"} mongoDB={"mongoDB"} express={"Express"} tailwind={"tailwind"} links={"https://brainly-0ui5.onrender.com"}/>
        <Card title={"Real eState"} image={"/realstate.png"} about={"An app that sell, buy or rent your property, There is section for user that buy or rent a property and owner that sell or maintain there property"} react={"react"} jwt={"JWT"} mongoDB={"mongoDB"} express={"Express"} tailwind={"tailwind"} links={"https://real-estate-td15.onrender.com/"}/>
        <Card title={"100xDevs"} image={"/realstate.png"} about={"100xDevs pltform that sell course"} react={"react"} mongoDB={"mongoDB"} express={"Express"} tailwind={"tailwind"} links={"https://one00xdevs-1fe.onrender.com/"}/>
      </div>    
  </div>
  )
}
