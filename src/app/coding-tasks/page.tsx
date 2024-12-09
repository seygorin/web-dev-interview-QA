'use client'

import React, { useState } from 'react'
import MainHeaderLinks from '@/components/MainHeaderLinks'
import CodeEditor from '@/components/CodeEditor'
import Modal from '@/components/Modal'

interface Task {
  title: string
  description: string
  codeTemplate: string
  expectedOutput: string
}

const tasks: Task[] = [
  {
    title: 'Task 1: Reverse a String',
    description:
      'Write a function that takes a string as input and returns the string reversed.',
    codeTemplate: `function reverseString(str) {
  // Your code here
}`,
    expectedOutput: 'Example: reverseString("hello") should return "olleh".',
  },
  {
    title: 'Task 2: FizzBuzz',
    description:
      'Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".',
    codeTemplate: `function fizzBuzz() {
  // Your code here
}`,
    expectedOutput:
      'Example: fizzBuzz() should print numbers with Fizz, Buzz, and FizzBuzz.',
  },
]

export default function CodingTasks() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  return (
    <section className='container mx-auto px-4 py-8'>
      <MainHeaderLinks />
      <ul className='list-disc pl-5'>
        {tasks.map((task, index) => (
          <li key={index} className='mb-4'>
            <h2
              className='text-xl font-semibold cursor-pointer text-sky-500 hover:text-sky-700'
              onClick={() => setSelectedTask(task)}
            >
              {task.title}
            </h2>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={selectedTask !== null}
        onClose={() => setSelectedTask(null)}
      >
        {selectedTask && (
          <CodeEditor
            codeTemplate={selectedTask.codeTemplate}
            expectedOutput={selectedTask.expectedOutput}
          />
        )}
      </Modal>
    </section>
  )
}
