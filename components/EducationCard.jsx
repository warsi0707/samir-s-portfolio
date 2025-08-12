import { motion } from "framer-motion";

export default function EducationCard({ name, organ, from, to, logo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-between sm:flex-row"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
        <div className="flex justify-center sm:justify-start">
          <motion.img
            whileHover={{ scale: 0.8 }}
            whileTap={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="object-cover w-24 h-24 rounded-full cursor-pointer md:h-20 md:w-20"
            src={logo}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center sm:justify-center sm:items-start">
          <h1 className="text-lg font-bold sm:text-2xl">{name}</h1>
          <p className="text- sm:text-lg">{organ}</p>
        </div>
      </div>
      <p className="flex justify-center mt-4 text-sm sm:justify-start sm:text-lg">
        {from} - {to}
      </p>
    </motion.div>
  );
}
