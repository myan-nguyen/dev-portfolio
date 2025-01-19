"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView('ABOUT');

    return (
        <motion.section 
        ref={ref}
        className='mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-24'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 1, delay: 0.2 }}
        id='about'>
            <SectionHeading>ABOUT ME</SectionHeading>
            <p className='mb-3'>
                I am currently a Computer Science and Applied Math-Economics student at Brown University. 
            </p>

            <p>
                In my free time, I enjoy staying active, playing piano, and designing clothes. Check out my apparel portfolio in the PROJECTS section, also constructed with Next.js and TypeScript!
            </p>
        </motion.section>

  );
}
