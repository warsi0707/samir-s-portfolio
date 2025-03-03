import React from 'react'
import Technology from './Technology'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
export default function Skills() {
  return (
    <div className='flex mx-5 md:mx-0  flex-wrap sm:justify-start gap-5 mb-20'>
      <Technology icon={<RiTailwindCssFill/>} title={"Tailwind"}/>
      <Technology icon={<IoLogoJavascript/>} title={"Java script"}/>
      <Technology icon={<FaReact/>} title={"React js"}/>
      <Technology icon={<RiNextjsFill/>} title={"Next js"}/>
      <Technology icon={<SiExpress/>} title={"Express Js"}/>
      <Technology icon={<DiMongodb/>} title={"Mongo DB"}/>
      <Technology icon={<BiLogoPostgresql/>} title={"Postgres"}/>
      <Technology icon={<FaReact/>} title={"Prisma"}/>
      <Technology icon={<SiPrisma/>} title={"react"}/>
      <Technology icon={<SiJsonwebtokens/>} title={"JWT"}/>
    </div>
  )
}
