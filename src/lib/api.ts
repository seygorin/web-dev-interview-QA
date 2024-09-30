import { categories } from '../../public/interview-data/categories'
import { getInterviewContent, slugify } from './interviews'

interface SearchResult {
  slug: string;
  title: string;
  content: string;
  position: number;
  snippet: string;
  header: string;
}

export function searchInterviews(searchTerm: string): SearchResult[] {
  const results: SearchResult[] = []

  Object.entries(categories).forEach(([category, data]) => {
    data.items.forEach((item) => {
      const slug = slugify(item)
      const { title, content } = getInterviewContent(slug)

      if (title && content) {
        const lowerCaseContent = content.toLowerCase()
        const lowerCaseSearchTerm = searchTerm.toLowerCase()

        let position = lowerCaseContent.indexOf(lowerCaseSearchTerm)
        while (position !== -1) {
          const start = Math.max(0, position - 50)
          const end = Math.min(lowerCaseContent.length, position + searchTerm.length + 50)
          const snippet = content.slice(start, end)

          const headerMatch = content.slice(0, position).match(/#{1,6}\s+([^\n]+)(?!\n)/g)
          const header = headerMatch ? headerMatch[headerMatch.length - 1].trim() : ''

          results.push({
            slug: `${data.folder}/${slug}`,
            title,
            content,
            position,
            snippet,
            header,
          })

          position = lowerCaseContent.indexOf(lowerCaseSearchTerm, position + 1)
        }
      }
    })
  })

  return results
}
