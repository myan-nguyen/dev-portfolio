import './globals.css'
import { Hedvig_Letters_Serif } from 'next/font/google'

import Header from "@/components/header";
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const hedvigLettersSerif = Hedvig_Letters_Serif({ subsets: ['latin'] })

export const metadata = {
  title: 'Myan Nguyen | Developer Portfolio',
  description: 'Digital portfolio for developer and Brown University student Myan Nguyen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${hedvigLettersSerif.className} bg-stone-50 text-gray-950 relative h-[4500px] pt-28 sm:pt-36 
      dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 dark:bg`}>
        <div className="bg-[#b7b3b0] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#707b8c]"></div>
        <div className="bg-[#ebeae6] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#a1a6ad]"></div>
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
            <Toaster position='top-right' />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
        </body>
    </html>
  )
}
