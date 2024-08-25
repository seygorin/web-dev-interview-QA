import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='fixed bottom-2 right-2'>
      by {' '}
      <Link
        href='https://github.com/seygorin'
        target='_blank'
        rel='noopener noreferrer'
        className='text-slate-600 hover:text-sky-600 transition-colors'
      >
        seygorin
      </Link>
    </footer>
  )
}
