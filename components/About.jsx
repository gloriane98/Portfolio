import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../public/assets/BMP04425-Modifier.jpg';

export default function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#646464]'>ABOUT</p>
            <h2 className='py-4 '>Who I Am</h2>
            <p className='py-2 text-[#6D493B]'>
            I am a full stack developer with experience in software development and graphic design. I am always developing my skills and learning something new. I have a thirst for knowledge and a desire to understand how things work.I believe that being a great developer is not about using a specific language, but about choosing the best tool for the job.
          I am extremely motivated to constantly develop my skills and grow professionally.
            </p>
            <hr/>
            <Link href="/#projects">
            <p className='py-2 text-[#646464] underline cursor-pointer'> Check out some my latest projects.</p>
            </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-ceter justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src={AboutImg} className='rounded-xl' alt='/'/>
        </div>
      </div>
    </div>
  )
}
