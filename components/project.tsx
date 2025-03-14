'use client';

import { projectsData } from '@/lib/data';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div 
        ref={ref} 
        style={{
            scale: scaleProgress,
            opacity: opacityProgress,
        }}
        className='group mb-3 sm:mb-8 last:mb-0'>
        <section 
            className='bg-gray-100 max-w-[50rem] border border-black/5 overflow-hidden sm:pr-16 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-slate-800 dark:bg-gray-300'>
            <div className='pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[24rem]'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag, index) => (
                    <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white' key={index}>{tag}</li>
                ))}
                </ul>
            </div>
        
            <Image src={imageUrl} alt={title} quality={95} 
            className='absolute hidden sm:block top-8 -right-40 w-[29rem] rounded-t-lg shadow-2xl 
            group-hover:-translate-x-3 
            group-hover:translate-y-3 
            group-hover:-rotate-2 
            group-hover:scale-[1.04] 

            group-even:group-hover:translate-x-3 
            group-even:group-hover:translate-y-3 
            group-even:group-hover:rotate-2 

            group-even:-right-[initial] 
            group-even:-left-40
            transition' />
        </section>
        </motion.div>
    
    );
}