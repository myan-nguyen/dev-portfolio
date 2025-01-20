'use client';

import React from 'react'
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
    const { ref } = useSectionInView('CONTACT');

    const sendEmail = async (formData: FormData) => {
        'use server';

        console.log('Running on server');
        console.log(formData.get('senderEmail'));
        console.log(formData.get('message'));
    }

    return (
        <motion.section 
        ref={ref}
        id='contact'
        className='mb-20 w-[min(100%,75rem)] sm:mb-28'
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        viewport={{
            once: true,
        }}>
            <div className='flex flex-row'>
                <div className='flex flex-col justify-center w-1/2'>
                    <h2 className='text-3xl font-medium capitalize mb-8'>CONNECT WITH ME</h2>
                    <p className='text-gray-700'>
                        You can contact me directly with any inquiries at 
                        {' '}<a className='underline' 
                        href='mailto:myan_nguyen@brown.edu'>myan_nguyen@brown.edu</a>{' '} or through this form:
                    </p>
                    <form className='mt-8 flex flex-col'
                    action={async (formData) => {
                        console.log(formData.get('senderEmail'));
                        console.log(formData.get('message'));
                    }}>
                        <input 
                            className='h-14 px-4 borderBlack' 
                            name='senderEmail'
                            type='email'
                            required
                            maxLength={500} 
                            placeholder='YOUR EMAIL' />
                        <textarea 
                            className='h-52 my-3 borderBlack p-4' 
                            name='message'
                            required
                            maxLength={2000}
                            placeholder='YOUR MESSAGE' />
                        <button 
                            type='submit' 
                            className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-opacity-50 active:scale-105 hover:bg-gray-950'>
                                SUBMIT 
                                <FaPaperPlane 
                                    className='text-xs opacity-70 transition-all 
                                        group-hover:translate-x-1
                                         group-hover:-translate-y-1' />
                        </button>
                    </form>
                </div>
                <div className='w-1/2 pl-20'>
                    <iframe
                        src="https://drive.google.com/file/d/12gkMn_2SRg-uaTtVzdA8HZMBS6CG70BQ/preview?usp=sharing"
                        width="561px"
                        height="726px"
                        loading="lazy">
                    </iframe>
                </div>
            </div>  
        </motion.section>
    )
}

