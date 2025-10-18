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

     className=' h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
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
I             ’m a Frontend Developer and Digital Marketing Specialist with experience in both building and promoting digital products. 
              On the technical side, I develop responsive and accessible web apps using React.js, Next.js, HTML5, CSS3, and JavaScript, with attention to UI/UX principles and Figma design workflows. 
              I’m comfortable in Linux (Ubuntu) environments and use GitHub for version control and collaboration.
              On the marketing side, I create and manage campaigns across Facebook, Instagram, LinkedIn, and TikTok, covering content creation (posts, reels, videos, designs), engagement strategies, paid ads, and market research. This combination of development and marketing expertise allows me to bridge the gap between technology and business delivering not just functional software, but products that engage users and drive real value.

              Passionate about the intersection of commerce, technology, I thrive on bringing creative ideas to life while keeping business impact in focus.            </p>

        </div>







    </motion.div>

  )

}

export default About