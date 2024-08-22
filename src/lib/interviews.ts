import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const interviewDirectory = path.join(process.cwd(), 'public/interview-data')

export function getInterviewMetadata() {
  const files = fs.readdirSync(interviewDirectory)
  return files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const filePath = path.join(interviewDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const {data, content} = matter(fileContents)
    return {
      slug,
      title: data.title,
      content: content,
    }
  })
}

export function getInterviewContent(slug: string) {
  const filePath = path.join(interviewDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const {data, content} = matter(fileContents)
  return {
    title: data.title,
    content,
  }
}
