import React from 'react'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import type { Article } from '@/lib/types'

interface ArticleCardProps {
  article: Article
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group">
      <Link href={`/insights/${article.slug}`} className="block">
        <div className="border-b border-mist-gray pb-8 last:border-0 last:pb-0">
          <div className="flex items-center gap-4 text-sm text-mist-gray mb-3">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readingTime}
            </span>
            <span className="text-deep-teal uppercase tracking-wider text-xs">
              {article.category}
            </span>
          </div>
          <h3 className="text-xl font-serif text-ink-black group-hover:text-deep-teal transition-colors mb-2">
            {article.title}
          </h3>
          <p className="text-ink-black/70 line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </article>
  )
}
