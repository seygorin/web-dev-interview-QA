'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useTheme } from '@/contexts/ThemeContext'
import { categories } from '../../public/interview-data/categories'

interface HeaderProps {
  openSandbox: () => void
}

export default function Header({ openSandbox }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTitle, setCurrentTitle] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight
      document.documentElement.style.setProperty(
        '--header-height',
        `${headerHeight}px`
      )
    }
  }, [isScrolled])

  useEffect(() => {
    const slug = pathname.split('/').pop()
    const title = Object.values(categories).flat().find(t => t.toLowerCase().replace(/[^\w]+/g, '-') === slug)
    setCurrentTitle(title || '')
  }, [pathname])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header
      ref={headerRef}
      className={`bg-white dark:bg-slate-800 sticky shadow-md top-0 z-10 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className='container mx-auto px-4 flex flex-wrap items-center justify-between'>
        <Link
          href='/'
          className={`text-slate-700 dark:text-slate-400 font-bold transition-all duration-300 ${
            isScrolled ? 'text-xl' : 'text-2xl'
          }`}
        >
          Web Interview Q&A
        </Link>
        {currentTitle && (
          <h2 className={`text-slate-600 dark:text-slate-300 font-semibold transition-all duration-300 ${
            isScrolled ? 'text-base' : 'text-lg'
          }`}>
            {currentTitle}
          </h2>
        )}
        <div className='flex flex-wrap items-center space-x-4'>
          <button
            onClick={openSandbox}
            className={`bg-sky-500 text-white rounded-md hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-800 focus:outline-none transition-all duration-300 ${
              isScrolled ? 'px-3 py-1 text-sm' : 'px-4 py-2'
            }`}
          >
            Playground
          </button>
          <button onClick={toggleTheme} className={`transition-all duration-300 ${isScrolled ? 'p-1' : 'p-2'}`}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <form onSubmit={handleSearch} className='flex'>
            <input
              type='text'
              placeholder='Search questions...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`border border-slate-300 dark:border-slate-600 rounded-l-md focus:outline-none dark:bg-slate-700 dark:text-white transition-all duration-300 ${
                isScrolled ? 'px-3 py-1 text-sm' : 'px-4 py-2'
              }`}
            />
            <button
              type='submit'
              className={`bg-sky-500 text-white rounded-r-md hover:bg-sky-600 dark:hover:bg-sky-800 dark:bg-sky-600 focus:outline-none transition-all duration-300 ${
                isScrolled ? 'px-3 py-1' : 'px-4 py-2'
              }`}
            >
              🔍
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}