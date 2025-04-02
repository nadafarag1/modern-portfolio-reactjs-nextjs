import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import Backgroundcircles from './Backgroundcircles';
import Image from 'next/image'
import { motion } from 'framer-motion'
import download from '../public/download.jpeg'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
                'Hi, The name is Nada',
                'Girl-who-loves-cats', 
                'software engineer', 
            ],
        loop: true,
        deleteSpeed: 2000,

    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <Backgroundcircles/>
   
       <Image
        className='responsive rounded-full h-32 w-32 mx-auto object-cover'
        src='/download.jpeg'
        width={200}
        height={200}
        text-align='center'
        
        alt='profile'
        />
        
      
    <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            Software Engineer
        </h2>

         <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <span className='text-[#F7ABBA]'> </span>
            <Cursor cursorColor='#F7ABBA' />
        </h1>

        <div className='pt-5'>
            
            <Link href='#about'>
                <button className='heroButton'>About</button>
            </Link>

            <Link href='#experience'>
                <button className='heroButton'>Experience</button>
            </Link>

            <Link href='#skills'>
                <button className='heroButton'>Skills</button>
            </Link>

            <Link href='#projects'>
                <button className='heroButton'>Projects</button>
            </Link>

         </div>

    </div>
   
    </div>
    );
}