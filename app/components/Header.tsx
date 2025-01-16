import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Header = ({isDarkMode}:{isDarkMode:boolean}) => {
  return (
    <div className='text-center mx-auto h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center gap-6 md:gap-8 '>
        <motion.div 
        initial={{ scale:0 }}
        whileInView={{ scale:1 }}
        transition={{duration:0.8, type:'spring', stiffness:100}}
        className='mt-10'>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </motion.div>
        <motion.h3
        initial={{ y:-20, opacity:0 }}
        whileInView={{ y:0, opacity:1 }}
        transition={{duration:0.6, delay:0.3}}
        className='flex gap-2 text-lg md:text-2xl mb-3 font-Ovo'>
            Hi! I&apos;m Gonzalo Hernandez
            <Image src={assets.hand_icon} alt='' className='w-6'/>
        </motion.h3>
        <motion.h1
                initial={{ y:-30, opacity:0 }}
                whileInView={{ y:0, opacity:1 }}
                transition={{duration:0.8, delay:0.5}}
        className='text-[35px] flex flex-col sm:gap-4 text-6xl lg:text-[66px] font-Ovo'>
            <div className='text-[35px]'>
                frontend oriented
            </div>
            <div>
                full stack developer
            </div>
        </motion.h1>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 lg:mt-8'>
            <motion.a
            initial={{ y:30, opacity:0 }}
            whileInView={{ y:0, opacity:1 }}
            transition={{duration:0.6, delay:1}}
            href='#contact' className='flex gap-4 border border-white items-center rounded-full px-10 py-3 bg-black text-white hover:border hover:border-black hover:bg-white hover:text-black dark:bg-transparent'>
                Contact me
                <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} alt='contact me' className='w-4'/>
            </motion.a>
            <motion.a
            initial={{ y:30, opacity:0 }}
            whileInView={{ y:0, opacity:1 }}
            transition={{duration:0.6, delay:1.2}}
            href='/GonzaloHernandez-FrontendDeveloper.pdf' download className='flex gap-4 border border-gray-500 items-center rounded-full px-10 py-3 bg-white hover:bg-black hover:text-white dark:text-black'>
                My resume
                <Image src={assets.download_icon} alt='my cv' className='w-4'/>
            </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Header
