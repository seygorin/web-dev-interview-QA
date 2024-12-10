import React from 'react';
import Link from 'next/link'

export default function MainHeaderLinks() {
  return (
    <h1 className='text-3xl text-slate-700 dark:text-slate-400 font-bold mb-6'>
      <Link href='/' className='text-sky-500 hover:text-sky-700'>
        Questions & Answers
      </Link>{' '}
      /{' '}
      <Link href='/coding-tasks' className='text-sky-500 hover:text-sky-700'>
        Coding Tasks
      </Link>
    </h1>
  );
} 