import { workData } from '@/assets/assets'
import React from 'react'
import WorkCard from './WorkCards'

const Work = () => {
  return (
    <div id='work' className='w-full px-[10%] flex flex-col items-center text-center justify-center '>
      <h4 className='mb-2 text-lg font-Ovo'>
        My portfolio
      </h4>
      <h2 className='text-5xl font-Ovo'>
        My latest work
      </h2>
      <p className='mb-12 max-w-2xl font-Ovo mt-5'>
        Welcome to my web development portfolio! Explore my colection of personal projects showcasing my expertise
      </p>
      <div className='flex flex-col my-10 gap-6 justify-center items-center lg:flex-row dark:text-black'>
        {workData.map(({title, description, bgImage}, key)=>(
            <WorkCard key={key} title={title} description={description} bgImage={bgImage} />
        ))}
      </div>
    </div>
  )
}

export default Work
