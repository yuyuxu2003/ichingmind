import React from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import type { Article } from '@/lib/types'

interface FeaturedArticleCardProps {
  article: Article
}

export const FeaturedArticleCard: React.FC<FeaturedArticleCardProps> = ({ article }) => {
  return (
    <article className="group">
      <Link href={`/insights/${article.slug}`} className="block">
        <div className="bg-ink-black/5 border border-mist-gray p-6 md:p-8 hover:border-deep-teal/30 transition-colors">
          <div className="flex items-center gap-4 text-sm text-mist-gray mb-4">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readingTime}
            </span>
            <span className="bg-muted-gold text-warm-white px-3 py-1 text-xs uppercase tracking-wider">
              Featured
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-ink-black group-hover:text-deep-teal transition-colors mb-3">
            {article.title}
          </h2>
          <p className="text-ink-black/80 mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 text-deep-teal group-hover:gap-3 transition-all">
            <span>阅读全文</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </article>
  )
}
