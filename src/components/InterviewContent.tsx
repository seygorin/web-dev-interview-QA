'use client'

import {useSearchParams} from 'next/navigation'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export default function InterviewContent({content}: {content: string}) {
  const searchParams = useSearchParams()
  const highlight = searchParams.get('highlight') || ''

  const addAnchorsToHeadings = (markdown: string) => {
    return markdown.replace(/^(#{1,3})\s+(.+)$/gm, (match, hashes, title) => {
      const id = title.toLowerCase().replace(/[^\w]+/g, '-')
      return `${hashes} ${title} <a id="${id}"></a>`
    })
  }

  const contentWithAnchors = addAnchorsToHeadings(content)

  return (
    <div className='interview-content'>
      <MarkdownRenderer content={contentWithAnchors} searchTerm={highlight} />
    </div>
  )
}
