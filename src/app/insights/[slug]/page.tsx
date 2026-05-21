import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/Container'
import { TagList } from '@/components/TagList'
import { RelatedPosts } from '@/components/RelatedPosts'
import { getArticleBySlug, getRelatedArticles, getAllArticles } from '@/lib/content'
import type { Metadata } from 'next'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: '文章未找到',
    }
  }

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
  }
}

export function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(article, 3)

  return (
    <div className="bg-warm-white min-h-screen">
      <article>
        <header className="py-16 border-b border-mist-gray">
          <Container>
            <div className="max-w-3xl">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-mist-gray hover:text-deep-teal transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                返回洞察
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink-black mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-mist-gray mb-6">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readingTime}
                </span>
                <span className="inline-flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
                <span className="text-deep-teal uppercase tracking-wider text-xs">
                  {article.category}
                </span>
              </div>
              
              <TagList tags={article.tags} />
            </div>
          </Container>
        </header>

        <section className="py-12">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg prose-quoteless prose-headings:font-serif prose-headings:text-ink-black prose-p:text-ink-black/80 prose-p:leading-relaxed prose-a:text-deep-teal prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-muted-gold prose-blockquote:text-ink-black prose-strong:text-ink-black">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: article.content
                      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
                      .replace(/\*(.*)\*/gim, '<em>$1</em>')
                      .split('\n\n').map((para, i) => {
                        if (!para.trim()) return ''
                        if (para.startsWith('<h')) return para
                        return `<p>${para}</p>`
                      }).join('\n')
                  }} 
                />
              </div>
            </div>
          </Container>
        </section>
      </article>

      <RelatedPosts posts={relatedArticles} title="相关文章" />
    </div>
  )
}
