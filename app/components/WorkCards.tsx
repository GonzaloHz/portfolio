import { WorkData, assets } from '@/assets/assets'
import Image from 'next/image'
import React, { FC } from 'react'

interface WorkCardProps extends WorkData {
    key: number
}

const WorkCard:FC<WorkCardProps> = ({title, description, bgImage}) =>  {
  return(
        <div className='flex justify-center items-end pb-5 aspect-square bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer w-[250px] h-[250px]'
        style={{backgroundImage:`url("${bgImage}")`}}
        >
            <div className='z-15 bg-white flex items-center justify-around rounded-md w-10/12 duration-500 py-2 px-3'>
                <div>
                    <h2 className='font-semibold'>{title}</h2>
                    <p className='text-sm text-gray-700'>{description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition'>
                    <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                </div>
            </div>
        </div>
  )
}

export default WorkCard
