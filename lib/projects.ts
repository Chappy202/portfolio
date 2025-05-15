import fs from 'fs'
import path from 'path'
import { Project } from '@/types/project'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export async function getProjects(): Promise<Project[]> {
  // Create the directory if it doesn't exist
  if (!fs.existsSync(projectsDirectory)) {
    fs.mkdirSync(projectsDirectory, { recursive: true })
  }

  const fileNames = fs.readdirSync(projectsDirectory)
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Parse the frontmatter
      const { data, content } = parseFrontmatter(fileContents)

      return {
        slug,
        content,
        ...data,
      } as Project
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return projects
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Parse the frontmatter
    const { data, content } = parseFrontmatter(fileContents)

    return {
      slug,
      content,
      ...data,
    } as Project
  } catch (error) {
    return null
  }
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const matches = fileContent.match(frontmatterRegex)

  if (!matches) {
    throw new Error('Invalid frontmatter')
  }

  const frontmatter = matches[1]
  const content = matches[2]

  // Parse the YAML frontmatter
  const data = frontmatter.split('\n').reduce((acc, line) => {
    const [key, ...valueArr] = line.split(':')
    if (key && valueArr.length > 0) {
      const value = valueArr.join(':').trim()
      if (key.includes('tags')) {
        acc[key.trim()] = value.startsWith('[') 
          ? JSON.parse(value)
          : value.split(',').map(tag => tag.trim())
      } else {
        acc[key.trim()] = value
      }
    }
    return acc
  }, {} as Record<string, any>)

  return { data, content }
} 