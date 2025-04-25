import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ProfileLucifer from '../public/Profile_-_Lucifer.webp'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-90 
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
        
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}


        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={ProfileLucifer.src}
        style={{ textAlign: 'center' }}
        alt='Lucifer'
      />



    <div className='px-0 md:px-10'>
          <h4 className='uppercase text-3xl font-light'>Accountant</h4>
          <p className='uppercase font-bold text-xl mt-1'>Company X</p>
     <div className='flex space-x-2 my-2'>
      {/*<Image
      className='h-10 w-10 rounded-full'
        src={ProfileLucifer.src}
        alt=''
        />
        */}
        
     </div>


     <p className='uppercase py-5 text-gray-300'>Started work.. - Ended..</p>
          <ul className='list-disc space-y-4 text-sm md:text-xl'>
               <li>Summary points Summary points Summary points</li>
               <li>Summary points Summary points Summary points</li>
               <li>Summary points Summary points Summary points</li>
           </ul>



     </div>
    </article>
  )
}

export default ExperienceCard