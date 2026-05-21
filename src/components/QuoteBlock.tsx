import React from 'react'
import { Quote } from 'lucide-react'

interface QuoteBlockProps {
  quote: string
  author?: string
  source?: string
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote, author, source }) => {
  return (
    <figure className="my-12">
      <blockquote className="relative pl-8 border-l-2 border-muted-gold">
        <Quote className="absolute -top-2 -left-1 w-6 h-6 text-muted-gold fill-warm-white" />
        <p className="text-xl md:text-2xl font-serif text-ink-black leading-relaxed">
          {quote}
        </p>
      </blockquote>
      {(author || source) && (
        <figcaption className="mt-4 text-mist-gray font-serif italic">
          {author && <span>— {author}</span>}
          {source && (
            <span className="text-sm">
              {author ? ', ' : ''}
              {source}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  )
}
