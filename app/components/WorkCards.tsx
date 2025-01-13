import { WorkData, assets } from '@/assets/assets'
import Image from 'next/image'
import React, { FC } from 'react'
import { motion } from 'motion/react'

interface WorkCardProps extends WorkData {
    key: number
}

const WorkCard:FC<WorkCardProps> = ({title, description, bgImage}) =>  {
  return(
        <motion.div
        whileHover={{opacity:1.05}}
        transition={{duration:0.3}}
        className='flex flex-col items-center aspect-square bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer relative w-full h-[250px]'
         style={{backgroundImage:`url("${bgImage}")`}}
         >
            <div className='absolute bottom-5 bg-white flex items-center justify-around rounded-md w-10/12 duration-500 py-2 px-3'>
                <div>
                    <h2 className='font-semibold'>{title}</h2>
                    <p className='text-sm text-gray-700'>{description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition'>
                    <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                </div>
            </div>
        </motion.div>
  )
}

export default WorkCard
