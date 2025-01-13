import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}:{isDarkMode:boolean}) => {
  return (
    <div className='mt-24'>
      <div className='text-center flex flex-col items-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mt-4'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='email' className='w-6'/>
            gonzalo.hernandez1@hotmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>
            If you can dream it, I can make it happen!
        </p>
        <ul>
            <li className='flex gap-10 justify-center items-center mt-4 sm:mt-0'>
                <a href='https://github.com/GonzaloHz' target='_blank'>Github</a>
                <a href='https://www.linkedin.com/in/gonzalo-hernandez-8161b9237/' target='_blank'>LinkedIn</a>
                <a href='https://x.com/GonzaloHz_' target='_blank'>Twitter</a>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
