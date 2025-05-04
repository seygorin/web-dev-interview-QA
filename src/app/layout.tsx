import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '@uiw/react-markdown-preview/markdown.css'
import RootLayoutClient from './RootLayoutClient'
import {ThemeProvider} from '@/contexts/ThemeContext'
import {Suspense} from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Web Dev Interview Q&A',
  description:
    'A collection of web development interview questions and answers',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en' className='overflow-y-scroll scrollbar-gutter-stable'>
      <body className={inter.className}>
        <ThemeProvider>
          <RootLayoutClient>
            <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
          </RootLayoutClient>
        </ThemeProvider>
      </body>
    </html>
  )
}
