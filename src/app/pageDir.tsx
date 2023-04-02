'use client'
import './globals.css'
import NavMenu from '@/client/pages/menu/NavMenu'
import { ThemeProvider } from 'next-themes'
import About from '@/client/pages/about/About'
import { FC } from 'react'
import FrontPage from '@/client/pages/frontpage/FrontPage'

const Home : FC<any> = ({
    navData,
    aboutData,
    contactData,
  }) => {
  
  return (
    <ThemeProvider attribute="class">
      <NavMenu  data={navData}/>
      <main className='container mx-auto px-4"'>
        <FrontPage className="flex flex-wrap cursor-pointer" >ayo testing animations</FrontPage>
        <About  data={aboutData}/>
      </main>
    </ThemeProvider>
  )
}

export default Home;