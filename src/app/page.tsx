import React from 'react'
import InterviewCategories from '@/components/InterviewCategories'
import {SearchResults} from '@/components/SearchResults'
import {getInterviewMetadata} from '@/lib/interviews'
import {searchInterviews} from '@/lib/api'
import {categories} from '../../public/interview-data/categories'

export default function Home({
  searchParams,
}: {
  searchParams: {search?: string}
}) {
  const searchQuery = searchParams.search || ''
  const interviewMetadata = getInterviewMetadata()
  const searchResults = searchQuery
    ? searchInterviews(searchQuery)
    : []

  return (
    <section className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl text-slate-700 dark:text-slate-400 font-bold mb-6'>
        Questions & Answers
      </h1>

      {searchQuery ? (
        <SearchResults results={searchResults} searchQuery={searchQuery} />
      ) : (
        <InterviewCategories interviews={categories} />
      )}
    </section>
  )
}
