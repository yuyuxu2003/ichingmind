import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Hexagram } from '@/lib/types'

interface HexagramCardProps {
  hexagram: Hexagram
}

export const HexagramCard: React.FC<HexagramCardProps> = ({ hexagram }) => {
  return (
    <Link href={`/hexagrams/${hexagram.id}`} className="block group">
      <div className="border border-mist-gray p-6 hover:border-deep-teal transition-colors">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-ink-black text-warm-white flex items-center justify-center font-serif text-lg">
              {hexagram.id}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-serif text-ink-black group-hover:text-deep-teal transition-colors">
                {hexagram.name}
              </h3>
              <span className="text-muted-gold font-serif">
                {hexagram.chineseName}
              </span>
            </div>
            <p className="text-ink-black/70 text-sm mb-3">
              {hexagram.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {hexagram.keywords.slice(0, 3).map((keyword, index) => (
                <span key={index} className="text-xs text-mist-gray bg-ink-black/5 px-2 py-1">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-mist-gray flex items-center gap-2 text-deep-teal text-sm">
          <span>了解更多</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
