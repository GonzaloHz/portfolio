import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '@/assets/assets'

const Navbar = () => {
  const [sideMenuState, setSideMenuState] = useState<boolean>(true)

  const openMenu = () => {
    setSideMenuState(false);
  }
  const closeMenu = () => {
    setSideMenuState(true);
  }

  return (
    <>
      <nav className='w-full flex items-center justify-center fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between'>
        <a href='#top'>
            <Image src={assets.logo} alt="logo" className='flex bg-white cursor-pointer h-24 w-auto md:h-32 lg:mr-14' />
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
            <li><a className='font-Ovo' href='#top'>Home</a></li>
            <li><a className='font-Ovo' href='#about'>About me</a></li>
            <li><a className='font-Ovo' href='#servoces'>Services</a></li>
            <li><a className='font-Ovo' href='#work'>My work</a></li>
            <li><a className='font-Ovo' href='#contact'>Contact me</a></li>
        </ul>
        <div className='flex justify-between gap-6'>
          <button>
            <Image src={assets.moon_icon} alt='darkMode' className='w-6'/>
          </button>
          <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} alt='contact' className='w-3'/></a>
          <button className='block md:hidden ml-3'>
            <Image src={assets.menu_black} alt='menu' className='w-6' onClick={()=>openMenu()}/>
          </button>
        </div>
        {/* -----------------mobile view---------------- */}
        <ul className={`${sideMenuState?'hidden':'flex -right-0'} flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 md:hidden`}>
            <div className='absolute right-6 top-6' onClick={()=>closeMenu()}>
              <Image src={assets.close_black} alt='closeMenu' className='w-5 cursor-pointer'/>
            </div>
            <li><a className='font-Ovo' onClick={()=>closeMenu()} href='#top'>Home</a></li>
            <li><a className='font-Ovo' onClick={()=>closeMenu()} href='#about'>About me</a></li>
            <li><a className='font-Ovo' onClick={()=>closeMenu()} href='#servoces'>Services</a></li>
            <li><a className='font-Ovo' onClick={()=>closeMenu()} href='#work'>My work</a></li>
            <li><a className='font-Ovo' onClick={()=>closeMenu()} href='#contact'>Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar