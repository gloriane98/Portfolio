import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectItem({title, backgroundImg, projectUrl, tech}) {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 rounded-xl p-4 group hover:bg-gradient-to-r from-[#6D493B] to-[#dfae9a] '>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt="/"/>
    <div  className='
    hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] 
    translate-y-[-50%] '>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-[#6D493B] font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
</div>
  )
}
