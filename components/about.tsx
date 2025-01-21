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
                I am a Computer Science and Applied Math-Economics student at Brown University, and am always looking for new opportunities to gain experience, improve my technical abilities, and learn new technologies. 
                As both a creative and analytical person, my favorite parts of programming include its 
                {' '}<span className='italic'>problem solving</span> and {' '}<span className='italic'>design</span> aspects.
                From past projects and research, I primarily have experience in working with 
                {' '}<span className='underline'>Python, React, Java, and TensorFlow/Keras</span>.
                I am currently looking for internships and similar opportunities for {' '}<span className='italic font-extrabold'>Summer 2025</span>. 
            </p>

            <p>
                In my free time, I enjoy staying active, reading, cooking, playing piano, and designing clothes. 
                Check out my apparel portfolio in my 
                {' '}<span className='font-bold'>PROJECTS</span> section, which is also built with 
                {' '}<span className='underline'>React, Next.js and TypeScript</span>!
            </p>
        </motion.section>

  );
}
