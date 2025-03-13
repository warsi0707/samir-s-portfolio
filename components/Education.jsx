"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Education() {
  return (
    <>
      <div className="mb-10 px-5 md:px-0 max-w-[900px] mx-auto min-h-[80vh] flex flex-col gap-16">
        <h1 className="text-4xl font-light text-white md:text-6xl flex justify-center">
          Education
        </h1>
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row  justify-between"
          >
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
              <div className="flex justify-center sm:justify-start">
                <img
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVU2aCVnu3rCRvKtL1LWauCHcX1oK6wUmfgw&s"
                  alt=""
                />
              </div>
              <div className="flex flex-col sm:justify-center items-center sm:items-start">
                <h1 className="text-lg sm:text-2xl font-bold">
                  Full Stack Web Development
                </h1>
                <p className="text- sm:text-lg">100xDevs</p>
              </div>
            </div>
            <p className="flex justify-center sm:justify-start  text-sm sm:text-lg mt-4">
              2024(Oct) - 2025(Feb)
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row  justify-between"
          >
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
              <div className="flex justify-center sm:justify-start">
                <img
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover"
                  src="https://gimgs2.nohat.cc/thumb/f/640/aktu-logo-dr-a-p-j-abdul-kalam-technical-university--m2i8d3H7b1m2d3N4.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col sm:justify-center items-center sm:items-start">
                <h1 className="text-lg sm:text-2xl font-bold">
                  Full Stack Web Development
                </h1>
                <p className="text- sm:text-lg">100xDevs</p>
              </div>
            </div>
            <p className="flex justify-center sm:justify-start  text-sm sm:text-lg mt-4">
              2021 - 2024
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row  justify-between"
          >
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
              <div className="flex justify-center sm:justify-start">
                <img
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover"
                  src="https://upload.wikimedia.org/wikipedia/en/8/86/Integral_University%2C_Lucknow_logo.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col sm:justify-center items-center sm:items-start">
                <h1 className="text-lg sm:text-2xl font-bold">
                  Integral University
                </h1>
                <p className="text- sm:text-lg">Diploma</p>
              </div>
            </div>
            <p className="flex justify-center sm:justify-start  text-sm sm:text-lg mt-4">
              2019 - 2021
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
