import React from 'react'
import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer md'>
        <motion.img
         initial={{
         x: directionLeft ? -200 : 200,
         opacity: 0
        }}
         transition={{ duration: 1 }}
        whileInView={{
        opacity: 1,
         x: 0
        }}
        viewport={{once: true}}
        src='https://cdn.worldvectorlogo.com/logos/react-1.svg'

        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out'
        />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
         group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='tezt-3 font-bold text-black opacity-100'>100%</p>
          </div>
        </div>
    </div>
  )
}

export default Skill