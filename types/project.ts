export interface Project {
  slug: string
  title: string
  description: string
  coverImage: string
  content: string
  tags: string[]
  publishedAt: string
  featured?: boolean
  protected?: boolean
} 