import React from 'react';

export default function HeaderLinks() {
  return (
    <h1 className='text-3xl text-slate-700 dark:text-slate-400 font-bold mb-6'>
      <a href='/' className='text-sky-500 hover:text-sky-700'>
        Questions & Answers
      </a>{' '}
      /{' '}
      <a href='/coding-tasks' className='text-sky-500 hover:text-sky-700'>
        Coding Tasks
      </a>
    </h1>
  );
} 