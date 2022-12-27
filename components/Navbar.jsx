import React, { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLogo from "../public/assets/icon.svg";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Navbar() {
    const [nav, setNav]=useState(false);
    const [navBg, setNavBg] = useState('#FCF9F2');
    const [shadow, setShadow] = useState(false);
    const [linkColor, setLinkColor] = useState('#6D493B');

    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);



    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div 
    style={{ backgroundColor: `${navBg}` }}
    className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
        <Image 
        src={NavLogo}
        alt="/" 
        width="150" 
        height="100" />
        </Link>
        <div>
            <ul style={{ color: `${linkColor}` }} className="hidden md:flex px-6">
                <Link href="/">
                    <li className=" ml-10 text-sm uppercase hover:border-b">Home</li>
                </Link>
                <Link href="/#about">
                    <li className=" ml-10 text-sm uppercase hover:border-b">About</li>
                </Link>
                <Link href="/#skills">
                    <li className=" ml-10 text-sm uppercase hover:border-b">Skills</li>
                </Link>
                <Link href="/#projects">
                    <li className=" ml-10 text-sm uppercase hover:border-b">Projects</li>
                </Link>
                <Link href="/#contact">
                    <li className=" ml-10 text-sm uppercase hover:border-b">Contact</li>
                </Link>
                <Link href="https://drive.google.com/file/d/1MDmbkYcfEvrXFuc7aktKPe3pdiajXm_5/view?usp=sharing">
                    <a target="_blank" rel="noopener noreferrer" className=" ml-10 text-sm uppercase hover:border-b">
                        Download Cv
                    </a>
                </Link>
            </ul>
            {/* Media querie */}
            <div onClick={handleNav} className="md:hidden">
                <AiOutlineMenu size={25} />
            </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/10" : ""}>
        <div className={
            nav 
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#FCF9F2] p-10 ease-in duration-500 " 
            :"fixed left-[-100%] top-0  p-10 ease-in duration-500 "
        }>
            <div>
                <div className="flex w-full items-center justify-between">
                    <Image 
                        src={NavLogo}
                        alt="/"
                        width={120}
                        height={80}
                    />
                    <div onClick={handleNav} className="rounded-full shadow-lg shadow-[#FCF9F2]-400 p-3 cursor-pointer">
                         <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className="border-b border-[#FCF9F2]-300  my-4">
                    <p className="w-[85%] md:w-[90%] py-4">Let&#39;s build something legendary together</p>
                </div>
            </div>
            {/* New menu */}
            <div py-4 flex flex-col >
                <ul>
                    <Link href="/">
                        <li onClick={() => setNav(false)} className="py-4 text-sm" >Home</li>
                    </Link>
                    <Link href="/#about">
                        <li onClick={() => setNav(false)} className="py-4 text-sm" >About</li>
                    </Link>
                    <Link href="/#skills">
                        <li onClick={() => setNav(false)} className="py-4 text-sm" >Skills</li>
                    </Link>
                    <Link href="/#projects">
                        <li onClick={() => setNav(false)} className="py-4 text-sm" >Projects</li>
                    </Link>
                    <Link href="/#contact">
                        <li onClick={() => setNav(false)} className="py-4 text-sm" >Contact</li>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1MDmbkYcfEvrXFuc7aktKPe3pdiajXm_5/view?usp=sharing">
                        <a onClick={() => setNav(false)} target="_blank" rel="noopener noreferrer" className="py-4 text-sm" >
                            Download CV
                        </a>
                    </Link>
                </ul>
                <div className="pt-40 ">
                    <p className="uppercase tracking-widest text-[#6D493B] pb-3">Let&#39;s Connect</p>
                    <div className="flex items-center justify-between my-' w-full sm:w-[80%] ">
                    <a
                        href='https://www.linkedin.com/in/gloriane-kingolo/'
                        target='_blank'
                        rel='noreferrer'>
                        <div className="rounded-full shadow-lg shadow-[#FCF9F2]-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaLinkedinIn/>
                        </div >
                    </a>    
                    <a
                        href='https://github.com/gloriane98'
                        target='_blank'
                        rel='noreferrer'> 
                       <div className="rounded-full shadow-lg shadow-[#FCF9F2]-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaGithub/>
                       </div>
                    </a>
                      <Link href="/#contact">
                        <div onClick={() => setNav(!nav)} className="rounded-full shadow-lg shadow-[#FCF9F2]-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail/>
                        </div>
                      </Link>
                     
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
