import {getInterviewContent} from '@/lib/interviews'
import InterviewContent from '@/components/InterviewContent'
import TableOfContents from '@/components/TableOfContents'

export default function InterviewPage({params}: {params: {slug: string}}) {
  const {title, content} = getInterviewContent(params.slug)

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl text-center font-bold mb-6'>{title}</h1>
      <div>
        <TableOfContents content={content} />
        <div className='flex-grow'>
          <InterviewContent content={content} />
        </div>
      </div>
    </div>
  )
}
