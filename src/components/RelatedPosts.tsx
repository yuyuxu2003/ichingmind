import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Article } from '@/lib/types'

interface RelatedPostsProps {
  posts: Article[]
  title?: string
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({
  posts,
  title = "相关文章"
}) => {
  if (!posts.length) return null

  return (
    <section className="py-12 border-t border-mist-gray">
      <div className="container mx-auto px-4 max-w-5xl">
        <h3 className="text-xl font-serif text-ink-black mb-6">
          {title}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group"
            >
              <article className="border border-mist-gray p-5 hover:border-deep-teal transition-colors">
                <span className="text-xs text-deep-teal uppercase tracking-wider mb-2 block">
                  {post.category}
                </span>
                <h4 className="text-lg font-serif text-ink-black group-hover:text-deep-teal transition-colors mb-2">
                  {post.title}
                </h4>
                <p className="text-ink-black/70 text-sm line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-deep-teal text-sm">
                  <span>阅读</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
