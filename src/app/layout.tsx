import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '@uiw/react-markdown-preview/markdown.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Web Interview Q&A',
  description:
    'A collection of web development interview questions and answers',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
