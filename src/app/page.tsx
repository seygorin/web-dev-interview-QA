import React from 'react'
import InterviewCategories from '@/components/InterviewCategories'
import {SearchResults} from '@/components/SearchResults'
import {getInterviewMetadata} from '@/lib/getInterviews'
import {searchInterviews} from '@/lib/searchInterviews'
import {categories} from '../../public/interview-data/categories'
import MainHeaderLinks from '@/components/MainHeaderLinks'

export default function Home({
  searchParams,
}: {
  searchParams: {search?: string}
}) {
  const searchQuery = searchParams.search || ''
  const interviewMetadata = getInterviewMetadata()
  const searchResults = searchQuery ? searchInterviews(searchQuery) : []

  return (
    <section className='container mx-auto px-4 py-8'>
      {searchQuery ? (
        <SearchResults results={searchResults} searchQuery={searchQuery} />
      ) : (
        <>
          <MainHeaderLinks />
          <InterviewCategories interviews={categories} />
        </>
      )}
    </section>
  )
}
