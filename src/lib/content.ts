import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Article, Hexagram, Topic } from './types'

const CONTENT_DIR = path.join(process.cwd(), 'src/content/insights')

export function getAllArticles(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return []
  }

  const fileNames = fs.readdirSync(CONTENT_DIR)
  const articles = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(CONTENT_DIR, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: fileName.replace(/\.mdx?$/, ''),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        category: data.category,
        tags: data.tags || [],
        author: data.author,
        readingTime: data.readingTime,
        featured: data.featured || false,
        coverImage: data.coverImage,
        seoTitle: data.seoTitle || data.title,
        seoDescription: data.seoDescription || data.excerpt,
        content,
      } as Article
    })

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(CONTENT_DIR, `${slug}.mdx`)
  const fullPathMd = path.join(CONTENT_DIR, `${slug}.md`)
  
  let filePath = ''
  if (fs.existsSync(fullPath)) {
    filePath = fullPath
  } else if (fs.existsSync(fullPathMd)) {
    filePath = fullPathMd
  } else {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    category: data.category,
    tags: data.tags || [],
    author: data.author,
    readingTime: data.readingTime,
    featured: data.featured || false,
    coverImage: data.coverImage,
    seoTitle: data.seoTitle || data.title,
    seoDescription: data.seoDescription || data.excerpt,
    content,
  } as Article
}

export function getRelatedArticles(article: Article, limit: number = 3): Article[] {
  const allArticles = getAllArticles().filter(a => a.slug !== article.slug)
  
  const related = allArticles
    .map(a => {
      let score = 0
      if (a.category === article.category) score += 2
      score += a.tags.filter(tag => article.tags.includes(tag)).length
      return { article: a, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.article)

  if (related.length < limit) {
    const remaining = allArticles
      .filter(a => !related.some(r => r.slug === a.slug))
      .slice(0, limit - related.length)
    return [...related, ...remaining]
  }

  return related
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter(article => article.featured)
}

export function getAllTopics(): Topic[] {
  const articles = getAllArticles()
  const topicMap = new Map<string, { name: string; count: number; description: string }>()

  articles.forEach(article => {
    article.tags.forEach(tag => {
      const existing = topicMap.get(tag)
      if (existing) {
        existing.count++
      } else {
        topicMap.set(tag, {
          name: tag,
          count: 1,
          description: `Explore insights about ${tag}`,
        })
      }
    })
  })

  return Array.from(topicMap.entries()).map(([slug, topic]) => ({
    slug: slug.toLowerCase().replace(/\s+/g, '-'),
    name: topic.name,
    description: topic.description,
    articleCount: topic.count,
  }))
}

export function getArticlesByTopic(topic: string): Article[] {
  return getAllArticles().filter(article => 
    article.tags.some(tag => tag.toLowerCase() === topic.toLowerCase())
  )
}

export const HEXAGRAMS: Hexagram[] = [
  {
    id: 1,
    name: 'Qian',
    chineseName: '乾',
    keywords: ['Initiative', 'Strength', 'Creativity'],
    summary: 'The creative principle, active movement, and the energy of new beginnings.',
  },
  {
    id: 2,
    name: 'Kun',
    chineseName: '坤',
    keywords: ['Receptivity', 'Support', 'Nurture'],
    summary: 'The receptive principle, holding space, and the wisdom of yielding.',
  },
  {
    id: 3,
    name: 'Zhun',
    chineseName: '屯',
    keywords: ['Difficulty', 'Beginning', 'Growth'],
    summary: 'The challenge of starting something new when conditions are difficult but growth is possible.',
  },
  {
    id: 4,
    name: 'Meng',
    chineseName: '蒙',
    keywords: ['Youthful Folly', 'Education', 'Guidance'],
    summary: 'The energy of learning, teaching, and finding guidance in uncertainty.',
  },
  {
    id: 5,
    name: 'Xu',
    chineseName: '需',
    keywords: ['Waiting', 'Nourishment', 'Patience'],
    summary: 'The wisdom of waiting for the right moment while preparing carefully.',
  },
  {
    id: 6,
    name: 'Song',
    chineseName: '讼',
    keywords: ['Conflict', 'Dispute', 'Resolution'],
    summary: 'How to approach conflict with clarity and seek true resolution.',
  },
  {
    id: 7,
    name: 'Shi',
    chineseName: '师',
    keywords: ['Army', 'Leadership', 'Unity'],
    summary: 'The art of leading a group with integrity, discipline, and shared purpose.',
  },
  {
    id: 8,
    name: 'Bi',
    chineseName: '比',
    keywords: ['Union', 'Partnership', 'Connection'],
    summary: 'The power of forming supportive relationships and aligning with others.',
  },
  {
    id: 9,
    name: 'Xiao Chu',
    chineseName: '小畜',
    keywords: ['Small Taming', 'Restraint', 'Accumulation'],
    summary: 'Gentle restraint and gradual accumulation before major movement.',
  },
  {
    id: 10,
    name: 'Lu',
    chineseName: '履',
    keywords: ['Treading', 'Conduct', 'Behavior'],
    summary: 'Walking carefully, following one\'s path with awareness and integrity.',
  },
  {
    id: 51,
    name: 'Zhen',
    chineseName: '震',
    keywords: ['Thunder', 'Shock', 'Awakening'],
    summary: 'Sudden movement, revelation, and the discovery of opportunity.',
  },
  {
    id: 52,
    name: 'Gen',
    chineseName: '艮',
    keywords: ['Stillness', 'Restraint', 'Boundary'],
    summary: 'Knowing when to stop, setting boundaries, and finding stillness in motion.',
  },
  {
    id: 57,
    name: 'Xun',
    chineseName: '巽',
    keywords: ['Wind', 'Penetration', 'Circulation'],
    summary: 'On information, subtle influence, and the spread of value.',
  },
  {
    id: 58,
    name: 'Dui',
    chineseName: '兑',
    keywords: ['Joy', 'Lake', 'Connection'],
    summary: 'Openness, joy, and the power of mutual communication and exchange.',
  },
]
