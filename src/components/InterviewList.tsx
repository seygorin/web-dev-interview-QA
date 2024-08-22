import Link from 'next/link'

interface Interview {
  slug: string
  title: string
}

interface InterviewListProps {
  interviews: Interview[]
}

export default function InterviewList({interviews}: InterviewListProps) {
  return (
    <ul className='space-y-4'>
      {interviews.map((interview) => (
        <li key={interview.slug}>
          <Link
            href={`/interview/${interview.slug}`}
            className='text-blue-600 hover:underline'
          >
            {interview.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
