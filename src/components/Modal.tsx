'use client'

import React, {useRef, useEffect} from 'react'
import {useTheme} from '@/contexts/ThemeContext'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
  const {theme} = useTheme()
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex'>
      <div
        ref={modalRef}
        className={`relative p-2 rounded w-full max-w-screen-xl m-auto ${
          theme === 'dark' ? 'bg-slate-800' : 'bg-white'
        }`}
      >
        <button
          className={`absolute top-6 right-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-800'
          }`}
          onClick={onClose}
        >
          ❌
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
