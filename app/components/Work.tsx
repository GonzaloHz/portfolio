import { workData } from '@/assets/assets'
import React from 'react'
import WorkCard from './WorkCards'

const Work = () => {
  return (
    <div id='work' className='py-10 scroll-mt-20 w-full px-[10%] flex flex-col items-center text-center justify-center '>
      <h4 className='mb-2 text-lg font-Ovo'>
        My portfolio
      </h4>
      <h2 className='text-5xl font-Ovo'>
        My latest work
      </h2>
      <p className='mb-12 max-w-2xl font-Ovo mt-5'>
        Welcome to my web development portfolio! Explore my colection of personal projects showcasing my expertise
      </p>
      <div className='grid grid-cols-1 gap-5 my-10 md:grid-cols-2 lg:grid-cols-3 dark:text-black'>
        {workData.map(({title, description, bgImage, urlGH, urlD}, key)=>(
            <WorkCard key={key} title={title} description={description} bgImage={bgImage} urlGH={urlGH} urlD={urlD} />
        ))}
      </div>
    </div>
  )
}

export default Work
