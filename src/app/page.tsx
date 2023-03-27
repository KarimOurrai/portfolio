'use client'
import './globals.css'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavMenu from '@/client/pages/menu/NavMenu'
import { ThemeProvider } from 'next-themes'
import ThemeToggle from '../client/component/darkmode/ThemeToggle'

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <NavMenu />
    </ThemeProvider>
  )
}
