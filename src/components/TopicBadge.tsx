import React from 'react'
import Link from 'next/link'
import type { Topic } from '@/lib/types'

interface TopicBadgeProps {
  topic: Pick<Topic, 'name' | 'slug'>
  variant?: 'default' | 'outline' | 'solid'
}

export const TopicBadge: React.FC<TopicBadgeProps> = ({
  topic,
  variant = 'default'
}) => {
  const baseClasses = "inline-flex items-center px-3 py-1 text-sm rounded-full transition-colors"

  const variantClasses = {
    default: "bg-warm-white text-ink-black border border-mist-gray hover:border-deep-teal hover:text-deep-teal",
    outline: "border border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-warm-white",
    solid: "bg-deep-teal text-warm-white hover:bg-ink-black"
  }

  return (
    <Link href={`/topics/${topic.slug}`} className={`${baseClasses} ${variantClasses[variant]}`}>
      {topic.name}
    </Link>
  )
}
