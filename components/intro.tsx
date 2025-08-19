"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id='home' className="mb-28 max-w-[55rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className='flex items-center justify-center pb-16'>
            <div className="flex">
              <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 1.5
              }}>
              <Image src="/myan-dev-portfolio.png" alt="Myan"
                width="192"
                height="192"
                quality="95"
                priority={ true }
                className="h-[375px] w-[1250px] object-cover border-[0.25rem] border-white shadow-xl"/>
              </motion.div>
            </div>
          <motion.h1 className="mb-10 mt-10 px-10 text-xl font-medium !leading-[1.5] sm:text-xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 1
          }}>
            <span className="font-bold">Hello! My name is Myan. </span> 
            I'm a {" "}
            <span className='italic'>developer and designer </span> 
            with experience in full-stack development and machine learning. 
            I specialize in {" "} 
            <span className='underline'>Python, Java, React, Next.js, and TypeScript.</span>
             {" "}Feel free to check out my work below!
          </motion.h1>

          
        </div>
        <motion.div className='flex flex-row items-center justify-center gap-4 px-4 text-medium font-medium sm:flex-row sm:items-center'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              type: "tween",
              duration: 1
            }}>
            <Link 
            href='#contact'
            className='group bg-white bg-opacity-25 border border-gray-900 text-gray-900 font-semibold px-7 py-3 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-opacity-50 active:scale-105 transition cursor-pointer dark:text-white dark:border-white'
            onClick={() => {
              setActiveSection('CONTACT');
              setTimeOfLastClick(Date.now());
            }}>
            CONTACT ME HERE <BsArrowRight className='opacity-80 group-hover:translate-x-2 transition' />
            </Link>
            <a className='group bg-white bg-opacity-25 border border-gray-900 text-gray-900 font-semibold px-7 py-3 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-opacity-50 active:scale-105 transition cursor-pointer dark:text-white dark:border-white'
            href='/myan-nguyen-resume.pdf' download>
              DOWNLOAD RESUME <HiDownload className='opacity-80 group-hover:translate-y-2 transition'/>
            </a>
            <a className='group bg-white bg-opacity-25 border border-gray-900 text-gray-700 font-semibold p-5 flex items-center gap-2 text-[1.20rem] outline-none focus:scale-110 hover:scale-110 hover:bg-opacity-5 hover-text-gray-950 active:scale-105 transition cursor-pointer dark:text-white dark:border-white'
            href='https://www.linkedin.com/in/myan-nguyen-1a6429297/' target="_blank">
              <BsLinkedin />
            </a>
            <a className='group bg-white bg-opacity-25 border border-gray-900 text-gray-700 font-semibold p-5 flex items-center gap-2 text-[1.20rem] outline-none focus:scale-110 hover:scale-110 hover:bg-opacity-50 hover-text-gray-950 active:scale-105 transition cursor-pointer dark:text-white dark:border-white'
            href='https://github.com/myan-nguyen' target="_blank">
              <FaGithubSquare />
            </a>
          </motion.div>
    </section>
  )
}
