import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({isDarkMode}:{isDarkMode:boolean}) => {
  return (
    <div id='about' className='w-full px-[10%] py-10 scroll-mt-20 flex flex-col gap-8'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-Ovo'>About me</h2>
        <div className='flex flex-col lg:flex-row items-center gap-20 '>
            <div className='w-full sm:rounded-3xl lg: max-w-96'>
                <Image src={assets.profile_img} alt='profile image' priority={true} className='bg-gray-500 w-full rounded-3xl'/>
            </div>
            <div className='flex flex-col w-full gap-6 lg:max-w-[60%]'>
                <p className='mb-10 max-w-2xl font-Ovo'>I am a full stack developer with frontend orientation, I also have training in web design and experience working with Javascript, NodeJS, React, Redux, SQL, among other technologies in the sector. As a Biomedical Engineering student, I have developed additional skills that have allowed me to successfully enter the IT industry.
                My engineering training has given me the ability to solve problems analytically, work autonomously and collaboratively in different work environments, which has allowed me to maximize my ability to function in different work spaces. I am flexible and able to adapt quickly to changes, which allows me to stay up to date in a sector that is constantly evolving.</p>
                <ul className='flex flex-wrap gap-6 lg:flex-nowrap'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl w-full p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black lg:w-[30%] dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                            <Image src={isDarkMode ? iconDark : icon} alt={`${title}`} className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </li>
                    ))}
                </ul>
                <h4 className='text-gray-700 font-Ovo dark:text-white/80'>Tools I use</h4>
                <ul className='flex gap-3 items-center sm:gap-6'>
                    {toolsData.map((tool, index)=>(
                        <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <Image src ={tool} alt='tools' className='w-8 sm:w-12'/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About
