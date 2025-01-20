'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            delay: 0.05 * index
        }
    }),
};

export default function Skills() {
    const { ref } = useSectionInView('SKILLS', 0.5); 

    return (
        <section 
        ref={ref}
        id='skills'
        className='mb-7 max-w-[53rem] scroll-mt-28 text-center sm:mb-7'>
            <SectionHeading>MY SKILLS</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-[1.1rem] text-gray-800'>
                {skillsData.map((skill, index) => (
                    <motion.li 
                    className='bg-white border border-black/[0.1] px-4 py-2.5'
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }}
                    custom={index}>
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}
