import React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  variant?: 'default' | 'minimal'
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  ctaText = "开始探索",
  ctaLink = "/insights",
  variant = 'default'
}) => {
  return (
    <section className="py-16 md:py-24 border-b border-mist-gray">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center">
          {variant === 'default' && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight text-ink-black">
              {title}
            </h1>
          )}
          {variant === 'minimal' && (
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 leading-tight text-ink-black">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl text-mist-gray mb-4 font-serif italic">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg text-ink-black/80 max-w-2xl mx-auto mb-8">
              {description}
            </p>
          )}
          {variant === 'default' && (
            <Link href={ctaLink} className="inline-flex items-center gap-2 text-deep-teal hover:text-ink-black transition-colors group">
              <span>{ctaText}</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
