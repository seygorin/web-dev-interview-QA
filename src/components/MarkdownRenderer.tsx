'use client'

import {forwardRef} from 'react'
import dynamic from 'next/dynamic'

const MarkdownPreview = dynamic(
  () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
  {ssr: false}
)

interface MarkdownRendererProps {
  content: string
}

const MarkdownRenderer = forwardRef<HTMLDivElement, MarkdownRendererProps>(
  ({content}, ref) => {
    const addAnchorsToHeadings = (markdown: string) => {
      return markdown.replace(/^(#{1,6})\s+(.+)$/gm, (match, hashes, title) => {
        const anchor = title.toLowerCase().replace(/[^\w]+/g, '-')
        return `${hashes} ${title} <a name="${anchor}"></a>`
      })
    }

    const contentWithAnchors = addAnchorsToHeadings(content)

    return (
      <div ref={ref}>
        <MarkdownPreview className='dark:bg-gray-800 dark:text-gray-400 p-8 pl-16' source={contentWithAnchors} />
      </div>
    )
  }
)

MarkdownRenderer.displayName = 'MarkdownRenderer'

export default MarkdownRenderer
