'use client'

import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'
import {useRouter} from 'next/navigation'
import {useTheme} from '@/contexts/ThemeContext'

export default function Header() {
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
      className='bg-white dark:bg-gray-800 shadow-md top-0 z-10'
    >
      <div className='container mx-auto px-4 py-4 flex flex-wrap items-center justify-between'>
        <Link
          href='/'
          className='text-2xl font-bold text-blue-600 dark:text-blue-400'
        >
          Web Interview Q&A
        </Link>
        <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>

        <div>
          <form onSubmit={handleSearch} className='flex mr-4'>
            <input
              type='text'
              placeholder='Search questions...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
            />
            <button
              type='submit'
              className='px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              🔍
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}
