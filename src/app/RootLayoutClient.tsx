'use client'

import {useState} from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeEditor from '@/components/CodeEditor'
import Modal from '@/components/Modal'

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSandbox = () => setIsModalOpen(true)
  const closeSandbox = () => setIsModalOpen(false)

  return (
    <>
      <Header openSandbox={openSandbox} />
      <main className='min-h-[calc(100dvh-74px)] pt-8 pb-4'>
        {children}
        <Modal isOpen={isModalOpen} onClose={closeSandbox}>
          <CodeEditor />
        </Modal>
      </main>
      <Footer />
    </>
  )
}
