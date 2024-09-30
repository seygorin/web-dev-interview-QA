import Link from 'next/link'
import { slugify } from '@/lib/interviews'

export default function InterviewList({interviews}) {
  return (
    <ul>
      {Object.entries(interviews).map(([category, data]) => (
        <li key={category}>
          <h2>{category}</h2>
          <ul>
            {data.items.map((item) => {
              const slug = slugify(item)
              return (
                <li key={item}>
                  <Link href={`/interview/${data.folder}/${slug}`}>
                    {item}
                  </Link>
                </li>
              )
            })}
          </ul>
        </li>
      ))}
    </ul>
  )
}
