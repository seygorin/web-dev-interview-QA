'use client'

import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'
import {useRouter, usePathname} from 'next/navigation'
import {useTheme} from '@/contexts/ThemeContext'
import {categories} from '../../public/interview-data/categories'

interface HeaderProps {
  openSandbox: () => void
}

export default function Header({openSandbox}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSticky, setIsSticky] = useState(false)
  const [currentTitle, setCurrentTitle] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const {theme, toggleTheme} = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const slug = pathname.split('/').pop()
    let title = ''

    Object.values(categories).forEach((category) => {
      const foundTitle = category.items.find(
        (item) => item.toLowerCase().replace(/[^\w]+/g, '-') === slug
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
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      ref={headerRef}
      className={`
        bg-white dark:bg-slate-800 sticky top-0 z-50 shadow-md
        transition-all duration-500 ease-in-out
        ${isSticky ? 'py-2' : 'py-4'}
      `}
    >
      <div className='container mx-auto px-4 flex flex-wrap items-center justify-between'>
        <Link
          href='/'
          className={`
            text-slate-700 dark:text-slate-400 font-bold
            transition-all duration-500 ease-in-out
            ${isSticky ? 'text-lg' : 'text-2xl'}
          `}
        >
          Web Dev Interview Q&A
        </Link>
        {currentTitle && (
          <h2
            className={`
              text-slate-600 dark:text-slate-300 font-semibold hidden md:block
              transition-all duration-500 ease-in-out
              ${isSticky ? 'text-sm' : 'text-lg'}
            `}
          >
            {currentTitle}
          </h2>
        )}
        <button
          onClick={toggleMenu}
          className='md:hidden text-slate-700 dark:text-slate-400'
        >
          ☰
        </button>
        <div
          className={`${
            isMenuOpen
              ? 'fixed inset-0 bg-white dark:bg-slate-800 p-10'
              : 'hidden'
          } md:flex md:flex-wrap md:items-center md:space-x-4`}
        >
          {isMenuOpen && (
            <button
              onClick={toggleMenu}
              className='absolute top-4 right-4 text-slate-700 dark:text-slate-400'
            >
              ✕
            </button>
          )}
          <button
            onClick={() => {
              openSandbox()
              setIsMenuOpen(false)
            }}
            className={`
              bg-sky-500 text-white rounded-md hover:bg-sky-600 
              dark:bg-sky-600 dark:hover:bg-sky-800 focus:outline-none 
              w-full md:w-auto mb-2 md:mb-0
              transition-all duration-500 ease-in-out
              ${isSticky ? 'px-3 py-1 text-sm' : 'px-4 py-2 text-base'}
            `}
          >
            Playground
          </button>
          <button
            onClick={() => {
              toggleTheme()
              setIsMenuOpen(false)
            }}
            className={`
              w-full md:w-auto mb-2 md:mb-0
              transition-all duration-500 ease-in-out
              ${isSticky ? 'p-1' : 'p-2'}
            `}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <form onSubmit={handleSearch} className='flex w-full md:w-auto'>
            <input
              type='text'
              placeholder='Search questions...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`
                border border-slate-300 dark:border-slate-600 rounded-l-md 
                focus:outline-none dark:bg-slate-700 dark:text-white w-full
                transition-all duration-500 ease-in-out
                ${isSticky ? 'px-3 py-1 text-sm' : 'px-4 py-2 text-base'}
              `}
            />
            <button
              type='submit'
              className={`
                bg-sky-500 text-white rounded-r-md hover:bg-sky-600 
                dark:hover:bg-sky-800 dark:bg-sky-600 focus:outline-none
                transition-all duration-500 ease-in-out
                ${isSticky ? 'px-3 py-1 text-sm' : 'px-4 py-2 text-base'}
              `}
            >
              🔍
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}
