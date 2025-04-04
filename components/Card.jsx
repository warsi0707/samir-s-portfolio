"use client";
import React from "react";
import Link from "next/link";
import Skill from "./skill";
import { motion } from "framer-motion";

export default function Card({
  title,
  about,
  links,
  image,
  react,
  express,
  mongoDB,
  tailwind,
  jwt
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center items-center gap-5 sm:items-center md:gap-24 md:flex-row py-5"
    >
      <Link href={`${links}`}>
        <img
          className=" px-2 md:w-64 h-48 mx-auto w-full ransition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600"
          src={`${image}`}
          alt=""
        />
      </Link>
      <div className="flex flex-col w-full  px-5 sm:px-0 sm:w-1/2 justify-center md:gap-5">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-gray-400">{about}</p>
        <div className="flex flex-wrap items-start gap-5">
          {react && <Skill skill={react} />}
          {tailwind && <Skill skill={tailwind} />}
          {express && <Skill skill={express} />}
          {mongoDB && <Skill skill={mongoDB} />}
          {jwt && <Skill skill={jwt} />}
        </div>
      </div>
    </motion.div>
  );
}
