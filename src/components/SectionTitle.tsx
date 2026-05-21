import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  actionLink?: string
  actionText?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'left',
  actionLink,
  actionText
}) => {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      <div className={`flex ${align === 'center' ? 'flex-col items-center' : 'justify-between items-end'} gap-4`}>
        <div>
          <h2 className="text-2xl md:text-3xl font-serif text-ink-black mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-mist-gray font-serif italic">
              {subtitle}
            </p>
          )}
        </div>
        {actionLink && actionText && (
          <Link
            href={actionLink}
            className="flex items-center gap-2 text-deep-teal hover:text-ink-black transition-colors text-sm"
          >
            {actionText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
      <div className={`w-16 h-0.5 bg-muted-gold mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  )
}
