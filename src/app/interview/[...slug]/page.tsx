import {
  getInterviewContent,
  getAllInterviews,
  slugify,
} from '@/lib/getInterviews'
import InterviewContent from '@/components/InterviewContent'
import TableOfContents from '@/components/TableOfContents'

export async function generateStaticParams() {
  const interviews = getAllInterviews()
  const paths: {slug: string[]}[] = []

  Object.entries(interviews).forEach(([category, data]) => {
    data.items.forEach((item) => {
      const slug = slugify(item)
      paths.push({slug: [data.folder, slug]})
    })
  })

  return paths
}

export async function generateMetadata({params}: {params: {slug: string[]}}) {
  const slug = params.slug[1]
  const {title, content} = await getInterviewContent(slug)

  const description = content
    .split('\n\n')[0]
    .replace(/[#*_`]/g, '')
    .slice(0, 160)

  return {
    title: `${title} | Web Dev Interview Q&A`,
    description: description,
    openGraph: {
      title: `${title} | Web Dev Interview Q&A`,
      description: description,
      type: 'article',
      url: `https://web-dev-interview-qa.vercel.app/interview/${params.slug[0]}/${slug}`,
    },
  }
}

export default async function InterviewPage({
  params,
}: {
  params: {slug: string[]}
}) {
  const slug = params.slug[1]
  const {title, content} = await getInterviewContent(slug)

  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (title === 'Not Found') {
    return (
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl text-slate-700 dark:text-slate-400 text-center font-bold mb-6'>
          Content Not Found
        </h1>
        <p>{content}</p>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl text-slate-700 dark:text-slate-400 text-center font-bold mb-6'>
        {title}
      </h1>
      <div>
        <TableOfContents content={content} />
        <div className='flex-grow'>
          <InterviewContent content={content} />
        </div>
      </div>
    </div>
  )
}
