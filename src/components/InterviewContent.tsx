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
      const id = title
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/-+$/, '')
      return `${hashes} ${title} <a id="${id}" class="heading-anchor"></a>`
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
            const headerHeight = header ? header.offsetHeight + 20 : 100

            const elementPosition =
              element.getBoundingClientRect().top + window.pageYOffset

            window.scrollTo({
              top: elementPosition - headerHeight,
              behavior: 'smooth',
            })
          }
        }, 300)
      }
    }
  }, [])

  return (
    <div ref={contentRef} className='interview-content'>
      <MarkdownRenderer content={contentWithAnchors} searchTerm={highlight} />
    </div>
  )
}
