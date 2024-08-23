import {Suspense} from 'react'
import InterviewCategories from '@/components/InterviewCategories'
import {getInterviewMetadata} from '@/lib/interviews'
import {SearchResults} from '@/components/SearchResults'
import {searchInterviews} from '@/lib/api'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function Home({
  searchParams,
}: {
  searchParams: {search?: string}
}) {
  const searchQuery = searchParams.search || ''
  const interviewMetadata = getInterviewMetadata()
  const searchResults = searchQuery
    ? searchInterviews(interviewMetadata, searchQuery)
    : []

  return (
    <main className='container mx-auto px-4 py-8'>
      <Suspense fallback={<LoadingSpinner />}>
        {searchQuery ? (
          <SearchResults results={searchResults} searchQuery={searchQuery} />
        ) : (
          <InterviewCategories interviews={interviewMetadata} />
        )}
      </Suspense>
    </main>
  )
}
