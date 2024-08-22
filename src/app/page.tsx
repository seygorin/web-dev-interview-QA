import {Suspense} from 'react'
import InterviewList from '@/components/InterviewList'
import {getInterviewMetadata} from '@/lib/interviews'
import {SearchResults} from '@/components/SearchResults'
import {searchInterviews} from '@/lib/api'

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
      <Suspense fallback={<div>Loading...</div>}>
        {searchQuery ? (
          <SearchResults results={searchResults} searchQuery={searchQuery} />
        ) : (
          <InterviewList interviews={interviewMetadata} />
        )}
      </Suspense>
    </main>
  )
}
