import { workData } from '@/assets/assets'
import React from 'react'
import WorkCard from './WorkCards'
import { motion } from 'motion/react'

const Work = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='work' className='py-10 scroll-mt-20 w-full px-[10%] flex flex-col items-center text-center justify-center '>
      <motion.h4
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{delay:0.3, duration:1}}
      className='mb-2 text-lg font-Ovo'>
        My portfolio
      </motion.h4>
      <motion.h2
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{delay:0.5, duration:0.5}}
      className='text-5xl font-Ovo'>
        My latest work
      </motion.h2>
      <motion.p
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.7, duration:0.5}}
      className='mb-12 max-w-2xl font-Ovo mt-5'>
        Welcome to my web development portfolio! Explore my colection of personal projects showcasing my expertise
      </motion.p>
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.9, duration:0.6}}
      className='flex flex-col my-10 gap-6 justify-center items-center lg:flex-row dark:text-black'>
        {workData.map(({title, description, bgImage}, key)=>(
            <WorkCard key={key} title={title} description={description} bgImage={bgImage} />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Work
