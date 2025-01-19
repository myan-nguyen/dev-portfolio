import './globals.css'
import { Hedvig_Letters_Serif } from 'next/font/google'

import Header from "@/components/header";

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
      <body className={`${hedvigLettersSerif.className} bg-stone-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className="bg-[#b7b3b0] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#ebeae6] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        
        <Header />
        {children}
        </body>
    </html>
  )
}
