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
        className='mb-15 max-w-[50rem] text-center leading-8 sm:mb-15 scroll-mt-24'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 1, delay: 0.2 }}
        id='about'>
            <SectionHeading>ABOUT ME</SectionHeading>
            <p className='mb-3'>
                Welcome to my page!
            </p>

            <p className='mb-3'>
                I am an Applied Mathematics and Computer Science student at Brown University with a passion for building creative, impactful technology from the ground up. I love the intersection of {' '}<span className='italic'>problem solving</span> and {' '}<span className='italic'>design</span>, whether it's developing machine learning models for health research or building full-stack applications with friends.
                My technical experiences spans
                {' '}<span className='underline'>Python, React, Next.js, TypeScript, Java, and TensorFlow/PyTorch</span>, gained through both research, startup, and personal projects.
                I am currently looking for {' '}<span className='italic font-extrabold'>Summer 2026 software, PM, or startup internships and opportunities</span>. 
            </p>

            {/* <p>
                In my free time, I enjoy staying active, reading, cooking, playing piano, and designing clothes. 
                Check out my apparel portfolio in my 
                {' '}<span className='font-bold'>PROJECTS</span> section, which is also built with 
                {' '}<span className='underline'>React, Next.js and TypeScript</span>!
            </p> */}
        </motion.section>

  );
}
