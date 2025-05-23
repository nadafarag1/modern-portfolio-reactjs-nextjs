import Head from 'next/head'
import type { NextPage } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Image from 'next/image'
import profilePic from '../public/download.jpeg'






export default function Home() {
  return (
    <div className='bg-[#363636] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Nada Portfolio</title>
      </Head>


    {/* Header */}
    <Header />


    {/* Hero */}

    <section id='hero' className='snap-start'>
      <Hero/>

    </section>




    { /* About */}

    <section id='about' className='snap-center'>
      <About/>
    </section>



    {     /* Experience */}

    <section id='experience' className='snap-center'>
      <WorkExperience/>
      
    </section>



    



    { /* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>





 
    { /* Projects */}
    <section id='projects' className='snap-start'>
     <Projects />
    </section>




    { /* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>









    </div>
  )
}