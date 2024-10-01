'use client'

import {useState, useEffect} from 'react'
import {useRouter, usePathname} from 'next/navigation'
import {slugify} from './../utils/slugify'

interface TOCItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({content}: TableOfContentsProps) {
  const [toc, setToc] = useState<TOCItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const headings = content.match(/^#{1,3}\s.+$/gm) || []
    const tocItems = headings.map((heading) => {
      const level = heading.match(/^#+/)?.[0].length || 0
      const title = heading.replace(/^#+\s/, '')
      const id = slugify(title)
      return {id, title, level}
    })
    setToc(tocItems)

    const header = document.querySelector('header')
    if (header) {
      setHeaderHeight(header.offsetHeight)
    }

    const contentElement = document.querySelector('.interview-content')
    if (contentElement) {
      contentElement.classList.toggle('md:ml-80', isOpen)
    }

    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [content, isOpen])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    title: string
  ) => {
    e.preventDefault()
    const id = slugify(title)
    const newUrl = `${pathname}#${id}`
    router.push(newUrl)

    if (window.innerWidth < 768) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`bg-white dark:bg-slate-800 mt-10  min-w-8 p-2 rounded-lg fixed transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'md:w-72' : 'w-0'}`}
        style={{top: `${headerHeight}px`, right: `1rem`, left: `1rem`}}
      >
        <button
          onClick={toggleOpen}
          className={`font-bold  top-2 ${
            isOpen ? 'right-2' : 'left-2'
          } md:static`}
        >
          {isOpen ? '✕' : '☰'}
        </button>
        {isOpen && (
          <ul className='space-y-2 mt-12 md:mt-0 max-h-[calc(100vh-16rem)]  overflow-y-auto'>
            {toc.map((item) => (
              <li
                key={item.id}
                style={{marginLeft: `${(item.level - 1) * 24}px`}}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.title)}
                  className='hover:text-sky-500 cursor-pointer'
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden'
          onClick={toggleOpen}
        ></div>
      )}
    </>
  )
}
