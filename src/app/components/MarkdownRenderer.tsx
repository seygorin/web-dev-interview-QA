'use client'

import {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'

const MarkdownPreview = dynamic(
  () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
  {ssr: false}
)

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({content}: MarkdownRendererProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (!content) {
    return <div>No content available</div>
  }

  return <MarkdownPreview source={content} />
}
