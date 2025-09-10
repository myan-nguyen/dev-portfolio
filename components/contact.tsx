'use client';

import React from 'react'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView('CONTACT');

    return (
        <motion.section 
        ref={ref}
        id='contact'
        className='h-[45rem] mb-20 w-[min(100%,75rem)] sm:mb-28 sm:h-[45rem]'
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
                    <p className='text-gray-700 dark:text-white'>
                        Currently looking for Summer 2026 opportunities! You can contact me directly with any inquiries at 
                        {' '}<a className='underline' 
                        href='mailto:myan_nguyen@brown.edu'>myan_nguyen@brown.edu</a>{' '} or through this form:
                    </p>
                    <form className='mt-8 flex flex-col dark:text-black'
                    action={async formData =>  {
                        const { data, error } = await sendEmail(formData);

                        if (error) {
                            toast.error(error);
                            return;
                        }

                        toast.success('Email sent successfully!')
                    }}>
                        <input 
                            className='h-14 px-4 borderBlack dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
                            name='senderEmail'
                            type='email'
                            required
                            maxLength={500} 
                            placeholder='YOUR EMAIL' />
                        <textarea 
                            className='h-52 my-3 borderBlack p-4 ark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
                            name='message'
                            required
                            maxLength={5000}
                            placeholder='YOUR MESSAGE' />
                        <SubmitBtn/>
                    </form>
                </div>
                <div className='w-1/2 pl-20'>
                    <iframe
                        src="https://drive.google.com/file/d/117SpdocbS5WI_n8SmeIy9y02vFko6x_m/preview?usp=sharing"
                        width="561px"
                        height="726px"
                        loading="lazy">
                    </iframe>
                </div>
            </div>  
        </motion.section>
    )
}

