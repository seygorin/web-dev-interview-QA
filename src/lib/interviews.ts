import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {categories} from '../../public/interview-data/categories'

const interviewDirectory = path.join(process.cwd(), 'public/interview-data')

export function slugify(text: string): string {
  return text.toLowerCase().replace(/[.\s]+/g, '-')
}

export function getInterviewMetadata(id?: string) {
  if (!id) {
    const allMetadata = [];
    for (const [category, data] of Object.entries(categories)) {
      const folder = data.folder;
      const items = data.items;
      for (const item of items) {
        const slug = slugify(item);
        const fullPath = path.join(
          process.cwd(),
          'public',
          'interview-data',
          folder,
          `${slug}.md`
        );
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        allMetadata.push({
          id: slug,
          title: data.title,
          category,
        });
      }
    }
    return allMetadata;
  }

  for (const [category, data] of Object.entries(categories)) {
    const folder = data.folder
    const items = data.items
    for (const item of items) {
      const slug = item.toLowerCase().replace(/ /g, '-')
      if (slug === id) {
        const fullPath = path.join(
          process.cwd(),
          'public',
          'interview-data',
          folder,
          `${slug}.md`
        )
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const {data, content} = matter(fileContents)
        return {
          id,
          title: data.title,
          content,
          category,
        }
      }
    }
  }
  return null
}

export function getInterviewContent(slug: string) {
  for (const [category, data] of Object.entries(categories)) {
    const folder = data.folder
    const items = data.items
    for (const item of items) {
      const itemSlug = slugify(item)
      if (itemSlug === slug) {
        try {
          const files = fs.readdirSync(path.join(interviewDirectory, folder))
          const mdFile = files.find(file => 
            slugify(file.replace('.md', '')) === slug
          )
          
          if (mdFile) {
            const filePath = path.join(interviewDirectory, folder, mdFile)
            const fileContents = fs.readFileSync(filePath, 'utf8')
            const {data, content} = matter(fileContents)
            
            if (slugify(data.title) === slug) {
              return {
                title: data.title,
                content,
              }
            }
          }
        } catch (error) {
          console.error(`Error reading file for slug ${slug}:`, error)
        }
      }
    }
  }
  console.warn(`No content found for slug: ${slug}`)
  return { title: 'Not Found', content: 'The requested content was not found.' }
}

export function getAllInterviews() {
  return categories
}
