import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { ArticleCard } from '@/components/ArticleCard'
import { SectionTitle } from '@/components/SectionTitle'
import { getAllTopics, getArticlesByTopic, getAllArticles } from '@/lib/content'
import type { Metadata } from 'next'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const topics = getAllTopics()
  const topic = topics.find(t => t.slug === params.slug)
  
  if (!topic) {
    return {
      title: '主题未找到',
    }
  }

  return {
    title: `${topic.name} - IChingMind`,
    description: topic.description,
  }
}

export function generateStaticParams() {
  const topics = getAllTopics()
  return topics.map((topic) => ({
    slug: topic.slug,
  }))
}

export default function TopicPage({ params }: PageProps) {
  const topics = getAllTopics()
  const topic = topics.find(t => t.slug === params.slug)
  
  if (!topic) {
    notFound()
  }

  const articles = getArticlesByTopic(topic.name)

  return (
    <div className="bg-warm-white min-h-screen">
      <header className="py-16 border-b border-mist-gray">
        <Container>
          <div className="max-w-3xl">
            <Link
              href="/topics"
              className="inline-flex items-center gap-2 text-mist-gray hover:text-deep-teal transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              返回主题
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink-black mb-4 leading-tight">
              {topic.name}
            </h1>
            
            <p className="text-lg text-ink-black/80 mb-4">
              {topic.description}
            </p>
            
            <p className="text-muted-gold font-serif">
              {articles.length} 篇文章
            </p>
          </div>
        </Container>
      </header>
      
      <section className="py-12">
        <Container>
          <div className="max-w-3xl">
            {articles.length > 0 ? (
              <>
                <SectionTitle
                  title="相关文章"
                  subtitle={`${articles.length} 篇`}
                />
                <div className="space-y-0">
                  {articles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-mist-gray">
                这个主题下还没有文章，正在创作中...
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  )
}
