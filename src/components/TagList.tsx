import React from 'react'
import Link from 'next/link'

interface TagListProps {
  tags: string[]
  className?: string
}

export const TagList: React.FC<TagListProps> = ({ tags, className = '' }) => {
  if (!tags.length) return null

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
          className="inline-flex items-center px-3 py-1 text-xs text-ink-black bg-ink-black/5 hover:bg-ink-black/10 transition-colors"
        >
          #{tag}
        </Link>
      ))}
    </div>
  )
}
