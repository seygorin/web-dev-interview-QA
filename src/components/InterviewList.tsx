import Link from 'next/link'
import { slugify } from '@/lib/interviews'

interface InterviewData {
  folder: string;
  items: string[];
}

interface InterviewsProps {
  [category: string]: InterviewData;
}

export default function InterviewList({ interviews }: { interviews: InterviewsProps }) {
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
