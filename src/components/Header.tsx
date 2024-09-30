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
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [currentTitle, setCurrentTitle] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 100
      const percentage = Math.min(scrollPosition / maxScroll, 1)
      setScrollPercentage(percentage)
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
  }, [scrollPercentage])

  useEffect(() => {
    const slug = pathname.split('/').pop()
    let title = ''
    
    Object.values(categories).forEach(category => {
      const foundTitle = category.items.find(item => 
        item.toLowerCase().replace(/[^\w]+/g, '-') === slug
      )
      if (foundTitle) {
        title = foundTitle
      }
    })
    
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
      className="bg-white dark:bg-slate-800 sticky shadow-md top-0 z-10 transition-all duration-300"
      style={{
        '--scroll-percentage': scrollPercentage,
        padding: `calc(1rem - 0.5rem * var(--scroll-percentage)) 1rem`,
      } as React.CSSProperties}
    >
      <div className='container mx-auto px-4 flex flex-wrap items-center justify-between'>
        <Link
          href='/'
          className="text-slate-700 dark:text-slate-400 font-bold transition-all duration-300"
          style={{
            fontSize: `calc(1.5rem - 0.25rem * var(--scroll-percentage))`,
          }}
        >
          Web Dev Interview Q&A
        </Link>
        {currentTitle && (
          <h2 
            className="text-slate-600 dark:text-slate-300 font-semibold transition-all duration-300"
            style={{
              fontSize: `calc(1.125rem - 0.125rem * var(--scroll-percentage))`,
            }}
          >
            {currentTitle}
          </h2>
        )}
        <div className='flex flex-wrap items-center space-x-4'>
          <button
            onClick={openSandbox}
            className="bg-sky-500 text-white rounded-md hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-800 focus:outline-none transition-all duration-300"
            style={{
              padding: `calc(0.5rem - 0.125rem * var(--scroll-percentage)) calc(1rem - 0.25rem * var(--scroll-percentage))`,
              fontSize: `calc(1rem - 0.125rem * var(--scroll-percentage))`,
            }}
          >
            Playground
          </button>
          <button 
            onClick={toggleTheme} 
            className="transition-all duration-300"
            style={{
              padding: `calc(0.5rem - 0.125rem * var(--scroll-percentage))`,
            }}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <form onSubmit={handleSearch} className='flex'>
            <input
              type='text'
              placeholder='Search questions...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-slate-300 dark:border-slate-600 rounded-l-md focus:outline-none dark:bg-slate-700 dark:text-white transition-all duration-300"
              style={{
                padding: `calc(0.5rem - 0.125rem * var(--scroll-percentage)) calc(1rem - 0.25rem * var(--scroll-percentage))`,
                fontSize: `calc(1rem - 0.125rem * var(--scroll-percentage))`,
              }}
            />
            <button
              type='submit'
              className="bg-sky-500 text-white rounded-r-md hover:bg-sky-600 dark:hover:bg-sky-800 dark:bg-sky-600 focus:outline-none transition-all duration-300"
              style={{
                padding: `calc(0.5rem - 0.125rem * var(--scroll-percentage)) calc(1rem - 0.25rem * var(--scroll-percentage))`,
                fontSize: `calc(1rem - 0.125rem * var(--scroll-percentage))`,
              }}
            >
              🔍
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}