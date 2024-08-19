import InterviewList from '@/app/components/InterviewList'
import {getInterviewMetadata} from '@/app/lib/api'

export default function Home() {
  const interviewMetadata = getInterviewMetadata()

  return (
    <main className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Web Interview Q&A</h1>
      <InterviewList interviews={interviewMetadata} />
    </main>
  )
}
