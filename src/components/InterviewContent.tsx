'use client'

import {useSearchParams} from 'next/navigation'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export default function InterviewContent({content}: {content: string}) {
  const searchParams = useSearchParams()
  const highlight = searchParams.get('highlight') || ''

  return <MarkdownRenderer content={content} searchTerm={highlight} />
}
