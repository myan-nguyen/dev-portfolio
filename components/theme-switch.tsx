'use client';

import { useTheme } from '@/context/theme-context';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
    const  {theme, toggleTheme} = useTheme();

    return (
        <button className='fixed bottom-7 right-7 bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-slate-400 border-opacity-40 shadow-2xl w-[3rem] h-[3rem] rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-500'
        onClick={toggleTheme}>
            {theme === 'light' ? <BsSun /> : <BsMoon />}
        </button>
    )
}
