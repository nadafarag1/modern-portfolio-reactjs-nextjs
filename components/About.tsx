import { MotionConfig } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
    whileInView={{opacity: 1}}

     className=' flex-col relative h-scflexreen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl
     About'>
        About

     </h3>
     <motion.img
        initial={{
            x: -200,
            opacity: 0
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        src='/download.jpeg'
        width={200}
        height={200}
        text-align='center'
        
        alt='user picture'
        className='mt-24 md:mb-0 flex-shrink-0 w-52 h-52 md:w-[300px] md:h-[300px]
        rounded-full object-cover md:rounded-lg 
        xl:w-[400px] xl:h-[400px] '
        />


        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font'>Here is a <span className='underline decoration-[#f7AB0A]/50'>little</span> background</h4>
            <p className='text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

        </div>







    </motion.div>

  )

}

export default About