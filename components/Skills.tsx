import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type SkillType = {
  id: number
  name: string
}

function Skills() {
  const skills: SkillType[] = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'TypeScript' },
    { id: 3, name: 'React' },
    { id: 4, name: 'Next.js' },
    { id: 5, name: 'CSS' },
    { id: 6, name: 'HTML' },
    { id: 7, name: 'Node.js' },
    { id: 8, name: 'GraphQL' }
  ]

  const mid = Math.floor(skills.length / 2)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row 
        max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <div className='grid grid-cols-4 gap-5'>
        {skills.slice(0, mid).map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
        {skills.slice(mid).map((skill) => (
          <Skill key={skill.id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
