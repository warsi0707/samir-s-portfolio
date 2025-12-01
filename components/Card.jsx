"use client";
import Link from "next/link";
import Skill from "./skill";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { memo } from "react";


function Card({project}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-start justify-between  sm:items-center md:flex-row"
    >
      <Link href={`${project.links}`}>
        <img
          className="w-full h-48 px-2 mx-auto duration-300 md:w-64 ransition-all hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600"
          src={`${project.image}`}
          alt=""
        />
      </Link>
      <div className="flex flex-col justify-center w-full  px-5 sm:px-0 sm:w-1/2 md:gap-5">
        <div className="flex  items-center  gap-5">
          <h1 className="text-xl font-semibold">{project.title}</h1>
          <Link href={`${project.github}`} className="text-2xl"><FaGithub/></Link>
        </div>
        <p className="text-gray-400">{project.about}</p>
        <div className="flex flex-wrap items-start gap-1">
          {project && project.tech.map((item, indx)=>(
            <Skill key={indx} skill={item}/>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default memo(Card)
