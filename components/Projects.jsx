import React from 'react'
import Card from './Card'

export default function Projects() {
  return (
    <>
        <div className="flex justify-center flex-wrap px-5 sm:px-0 md:justify-between gap-5">
            <Card title={"Airbnb"} image={"/airbnb.png"} about={"Bacic airbnb app"} link={"https://airbnb-2-eram.onrender.com/"} react={"react"} mongoDB={"mongoDB"} express={"Express"} tailwind={"tailwind"}/>
            <Card title={"Brainly"} image={"/brainly.png"} about={"A second brain that store your daily basis links"}  react={"react"} mongoDB={"mongoDB"} express={"Express"} tailwind={"tailwind"} link={"https://brainly-0ui5.onrender.com/"}/>
            <Card title={"Real eState"} image={"/realstate.png"} about={"A app that sell, buy or rent your property"} react={"react"} mongoDB={"mongoDB"} express={"Express"} tailwind={"tailwind"} link={"https://real-estate-td15.onrender.com/"}/>
            <Card title={"100xDevs"} image={"/realstate.png"} about={"A app that sell, a course"} react={"react"} mongoDB={"mongoDB"} express={"Express"} tailwind={"tailwind"} link={"https://one00xdevs-1fe.onrender.com/"}/>
        </div>    
  </>
  )
}
