import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '@uiw/react-markdown-preview/markdown.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Web Interview Q&A',
  description:
    'A collection of web development interview questions and answers',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main className='min-h-screen pt-8 pb-4'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
