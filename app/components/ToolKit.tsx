"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "Java", icon: "/java-original.svg" },
  { name: "JavaScript", icon: "/javascript-plain.svg" },
  { name: "MongoDB", icon: "/mongodb-original.svg" },
  { name: "MySQL", icon: "/mysql-original.svg" },
  { name: "Node.js", icon: "/nodejs-original.svg" },
  { name: "React", icon: "/react-original.svg" },
  { name: "Redux", icon: "/redux-original.svg" },
  { name: "Angular", icon: "/angular-original.svg" },
  { name: "Express.js", icon: "/express-original.svg" },
  { name: "Next.js", icon: "/nextjs-original.svg" },
];

const Toolkit = () => {
  return (
    <section id='toolkit' className='py-20 bg-white'>
      <div className='max-w-5xl mx-auto px-6'>
        <h2 className='relative text-4xl font-bold text-gray-800  dark:text-red-400 text-center inline-block'>
          My Toolkit 🖥️
          <span className='absolute left-0 bottom-0 w-full h-3 bg-red-300 opacity-50 blur-md'></span>
        </h2>

        {/* Grid Layout for Skills */}
        <div className='mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-center'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className='flex flex-col items-center text-center p-4 transition hover:scale-110'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
                className=''
              />
              <span className='mt-2 text-sm font-medium  dark:text-black-600 '>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
