'use client'

import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'
import {useRouter} from 'next/navigation'
import {useTheme} from '@/contexts/ThemeContext'

interface HeaderProps {
  openSandbox: () => void
}

export default function Header({openSandbox}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const headerRef = useRef<HTMLElement>(null)
  const {theme, toggleTheme} = useTheme()

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight
      document.documentElement.style.setProperty(
        '--header-height',
        `${headerHeight}px`
      )
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header
      ref={headerRef}
      className='bg-white dark:bg-slate-800 shadow-md top-0 z-10'
    >
      <div className='container mx-auto px-4 py-4 flex flex-wrap items-center justify-between'>
        <Link
          href='/'
          className='text-2xl text-slate-700 dark:text-slate-400 font-bold text-slate-600 dark:text-slate-400'
        >
          Web Interview Q&A
        </Link>
        <div className='flex flex-wrap items-center space-x-4'>
          <button
            onClick={openSandbox}
            className='px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-800 focus:outline-none'
          >
            Playground
          </button>
          <button onClick={toggleTheme} className='p-2'>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <form onSubmit={handleSearch} className='flex'>
            <input
              type='text'
              placeholder='Search questions...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-l-md focus:outline-none dark:bg-slate-700 dark:text-white'
            />
            <button
              type='submit'
              className='px-4 py-2 bg-sky-500 text-white rounded-r-md hover:bg-sky-600 dark:hover:bg-sky-800 dark:bg-sky-600 focus:outline-none'
            >
              🔍
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}
