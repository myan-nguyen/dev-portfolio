'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
    const { ref } = useSectionInView('PROJECTS', 0.5); 
  
    return (
    <section ref={ref} id='projects' className='scroll-mt-24 mb-28'>
        <SectionHeading>MY PROJECTS</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))}
        </div>
    </section>
  );
}

