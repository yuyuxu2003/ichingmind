export interface Article {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  tags: string[]
  author: string
  readingTime: string
  featured: boolean
  coverImage?: string
  seoTitle: string
  seoDescription: string
  content: string
}

export interface Hexagram {
  id: number
  name: string
  chineseName: string
  keywords: string[]
  summary: string
  description?: string
}

export interface Topic {
  slug: string
  name: string
  description: string
  articleCount: number
}
