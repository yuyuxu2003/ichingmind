import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Topic } from '@/lib/types'

interface TopicCardProps {
  topic: Topic
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  return (
    <Link href={`/topics/${topic.slug}`} className="block group">
      <div className="border border-mist-gray p-6 hover:border-deep-teal transition-colors">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-serif text-ink-black group-hover:text-deep-teal transition-colors">
            {topic.name}
          </h3>
          <span className="text-sm text-muted-gold">
            {topic.articleCount} 篇
          </span>
        </div>
        <p className="text-ink-black/70 text-sm mb-4">
          {topic.description}
        </p>
        <div className="flex items-center gap-2 text-deep-teal text-sm">
          <span>探索</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
