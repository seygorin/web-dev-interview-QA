'use client'

import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/navigation'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href='/' className='text-2xl font-bold text-blue-600'>
          Web Interview Q&A
        </Link>
        <form onSubmit={handleSearch} className='flex'>
          <input
            type='text'
            placeholder='Search questions...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            type='submit'
            className='px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Search
          </button>
        </form>
      </div>
    </header>
  )
}
