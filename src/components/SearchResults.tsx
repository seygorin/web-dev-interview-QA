'use client'

import {useRouter} from 'next/navigation'

interface SearchResult {
  slug: string
  title: string
  content: string
  position: number
  snippet: string
  header: string
}

interface SearchResultsProps {
  results: SearchResult[]
  searchQuery: string
}

export function SearchResults({results, searchQuery}: SearchResultsProps) {
  const router = useRouter()

  const createHeaderId = (header: string): string => {
    return header
      .toLowerCase()
      .replace(/[^\w]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    slug: string,
    header: string
  ) => {
    e.preventDefault()
    const headerId = createHeaderId(header)
    const url = `/interview/${slug}#${headerId}`
    router.push(url)

    setTimeout(() => {
      const element = document.getElementById(headerId)
      if (element) {
        const headerElement = document.querySelector('header')
        const headerHeight = headerElement ? headerElement.offsetHeight : 0
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight - 20

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }, 100)
  }

  return (
    <div>
      <h2 className='text-2xl text-slate-700 dark:text-slate-400 font-bold mb-4'>
        Search Results for {searchQuery}
      </h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul className='space-y-4'>
          {results.map((result, index) => {
            const headerId = createHeaderId(result.header)
            return (
              <li key={`${result.slug}-${index}`} className='border-b pb-4'>
                <a
                  href={`/interview/${result.slug}#${headerId}`}
                  onClick={(e) => handleClick(e, result.slug, result.header)}
                  className='text-sky-600 hover:underline cursor-pointer'
                >
                  <h3 className='text-xl font-semibold'>{result.title}</h3>
                  <p className='text-sm text-slate-500'>{result.header}</p>
                </a>
                <p className='text-slate-600 mt-2'>...{result.snippet}...</p>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
