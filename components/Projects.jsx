import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import molatoImg from '../public/assets/projects/molato.png'
import mwasiTechImg from '../public/assets/projects/mwasi-tech.png'
import smartViewImg from '../public/assets/projects/smartview.png'
import netflixImg from '../public/assets/projects/netflix.jpg'
import ProjectItem from './ProjectItem'

export default function Projects() {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#646464]'>PROJECTS</p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem
              title="Molato App"
              backgroundImg={molatoImg}
              tech='React JS'
              projectUrl="/molato"
            />
            <ProjectItem
              title="Mwasi Tech Website"
              backgroundImg={mwasiTechImg}
              tech='WordPress'
              projectUrl="/mwast-tech"
            />
            <ProjectItem
              title="SmartView App"
              backgroundImg={smartViewImg}
              tech='React Js / MongoDB'
              projectUrl="/smartview"
            />
            <ProjectItem
              title="Netflix App"
              backgroundImg={netflixImg}
              tech='Next JS'
              projectUrl="/netflix"
            />
        </div>
      </div>
    </div>
  )
}
