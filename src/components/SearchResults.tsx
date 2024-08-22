import Link from 'next/link'

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
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>
        Search Results for {searchQuery}
      </h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul className='space-y-4'>
          {results.map((result) => (
            <li
              key={`${result.slug}-${result.position}`}
              className='border-b pb-4'
            >
              <Link
                href={`/interview/${result.slug}?highlight=${encodeURIComponent(
                  searchQuery
                )}#${encodeURIComponent(
                  result.header.toLowerCase().replace(/[^\w]+/g, '-')
                )}`}
                className='text-blue-600 hover:underline'
              >
                <h3 className='text-xl font-semibold'>{result.title}</h3>
                <p className='text-sm text-gray-500'>{result.header}</p>
              </Link>
              <p className='text-gray-600 mt-2'>...{result.snippet}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
