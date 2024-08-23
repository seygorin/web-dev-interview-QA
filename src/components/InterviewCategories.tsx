import Link from 'next/link'

interface Interview {
  slug: string
  title: string
}

interface InterviewCategoriesProps {
  interviews: Interview[]
}

const categories = {
  Languages: ['JavaScript Basic', 'JavaScript Core', 'TypeScript'],
  Styles: ['HTML/CSS'],
  Frameworks: ['React'],
}

export default function InterviewCategories({
  interviews,
}: InterviewCategoriesProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {Object.entries(categories).map(([category, titles]) => (
        <div key={category} className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-2xl font-bold mb-4'>{category}</h2>
          <div className='space-y-2'>
            {titles.map((title) => {
              const interview = interviews.find((i) => i.title === title)
              return interview ? (
                <Link
                  key={interview.slug}
                  href={`/interview/${interview.slug}`}
                  className='block bg-gray-100 hover:bg-gray-200 rounded p-3 transition duration-300'
                >
                  {interview.title}
                </Link>
              ) : null
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
