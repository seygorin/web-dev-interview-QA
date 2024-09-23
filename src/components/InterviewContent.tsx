'use client'

import {useEffect, useRef} from 'react'
import {useSearchParams} from 'next/navigation'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export default function InterviewContent({content}: {content: string}) {
  const searchParams = useSearchParams()
  const highlight = searchParams.get('highlight') || ''
  const contentRef = useRef<HTMLDivElement>(null)

  const addAnchorsToHeadings = (markdown: string) => {
    return markdown.replace(/^(#{1,3})\s+(.+)$/gm, (match, hashes, title) => {
      const id = title.toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/-+$/, ''); 
      return `${hashes} ${title} <a id="${id}" style="scroll-margin-top: var(--header-height, 80px);"></a>`
    })
  }

  const contentWithAnchors = addAnchorsToHeadings(content)

  useEffect(() => {
    if (contentRef.current) {
      const hash = window.location.hash.slice(1)
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(decodeURIComponent(hash))
          if (element) {
            const header = document.querySelector('header')
            const headerHeight = header ? header.offsetHeight : 0
            const elementPosition =
              element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight - 20

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            })
          }
        }, 2500)
      }
    }
  }, [])

  return (
    <div ref={contentRef} className='interview-content'>
      <MarkdownRenderer content={contentWithAnchors} searchTerm={highlight} />
    </div>
  )
}
