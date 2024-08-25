'use client'

import './globals.css'
import {Inter} from 'next/font/google'
import '@uiw/react-markdown-preview/markdown.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {ThemeProvider} from '@/contexts/ThemeContext'
import CodeEditor from '@/components/CodeEditor'
import Modal from '@/components/Modal'
import {useState} from 'react'

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: {children: React.ReactNode}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSandbox = () => setIsModalOpen(true)
  const closeSandbox = () => setIsModalOpen(false)

  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <Header openSandbox={openSandbox} />
          <main className='min-h-[calc(100dvh-var(--header-height))] pt-8 pb-4'>
            {children}
            <Modal isOpen={isModalOpen} onClose={closeSandbox}>
              <CodeEditor />
            </Modal>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
