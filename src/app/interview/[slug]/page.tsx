import {getInterviewContent} from '@/app/lib/api'
import MarkdownRenderer from '@/app/components/MarkdownRenderer'

export default function InterviewPage({params}: {params: {slug: string}}) {
  const {title, content} = getInterviewContent(params.slug)

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>{title}</h1>
      <MarkdownRenderer content={content} />
    </div>
  )
}
