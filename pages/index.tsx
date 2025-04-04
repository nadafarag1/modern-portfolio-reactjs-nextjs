import Head from 'next/head'
import type { NextPage } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'






export default function Home() {
  return (
    <div className='bg-[#363636] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Nada Portfolio</title>
      </Head>


    {/* Header */}
    <Header />


    {/* Hero */}

    <section id='hero ' className='snap-center'>
      <Hero/>

    </section>




    { /* About */}

    <section id='about' className='snap-center'>
      <About/>
    </section>



    {     /* Experience */}

    <section id='experience' className='snap-center'>
      <WorkExperience/>
      <WorkExperience/>
      
    </section>



    { /* Skills */}



    { /* Projects */}


    { /* Contact Me */}



    </div>
  )
}