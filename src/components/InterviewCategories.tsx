import Link from 'next/link'
import {categories} from '../../public/interview-data/categories'

interface InterviewCategoriesProps {
  interviews: {
    [key: string]: {
      folder: string;
      items: string[];
    }
  }
}

export default function InterviewCategories({
  interviews,
}: InterviewCategoriesProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr'>
      {Object.entries(interviews).map(([category, data]) => (
        <div
          key={category}
          className='bg-white dark:bg-slate-800 shadow-md rounded-lg p-6 flex flex-col'
        >
          <h2 className='text-2xl text-slate-700 dark:text-slate-400 font-bold mb-4'>{category}</h2>
          <div className='space-y-2 flex-grow overflow-auto'>
            {data.items.map((title) => {
              const slug = title.toLowerCase().replace(/ /g, '-')
              return (
                <Link
                  key={slug}
                  href={`/interview/${data.folder}/${slug}`}
                  className='block bg-slate-100 dark:bg-slate-600 hover:bg-slate-200 rounded p-3 transition duration-300'
                >
                  {title}
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
