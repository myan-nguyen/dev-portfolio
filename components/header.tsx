"use client";

import React from 'react';
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return <header className="z-[999] relative">
    <motion.div className="fixed top-0 left-1/2 h-[4.2rem] w-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-0 sm:h-[3.6rem] sm:w-full sm:left-1/2"
    initial={{ y: -100, x:"-50%", opacity: 5 }}
    animate={{ y:0, x:"-50%", opacity: 5 }}
    transition={{ duration: 2 }}>

      <div className="absolute left-8 top-3 text-2xl font-semibold text-gray-900 hover:text-gray-600 transition">
        <Link href="#home" onClick={() => setActiveSection('')}>MYAN NGUYEN</Link>
      </div>

    </motion.div>

    <nav className="flex fixed top-[0.15rem] right-4 h-12 py-2 sm:top-[0.3rem] sm:h-[initial] sm:py-0">
        
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[1rem] font-extrabold bg-slate-0 sm:w-[initial] sm:flex-nowrap sm:gap-3">
            {links.map(link => (
                <motion.li 
                className="h-3/4 flex items-center justify-center" 
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y:0, opacity: 1 }}
                transition={{ duration: 2 }}>
                    <Link className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-500 transition",
                      { 'underline': activeSection === link.name,}
                    )} href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name)
                      setTimeOfLastClick(Date.now())
                      }}>
                      {link.name}
        
                    </Link>
                </motion.li>
            ))}
        </ul>

    </nav>
  </header>
}
