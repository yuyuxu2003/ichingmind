import React from 'react'
import { Lightbulb, Sparkles, Clock, Globe } from 'lucide-react'

type CalloutVariant = 'Key Insight' | 'Practical Reflection' | 'Timing Note' | 'Modern Reading'

interface CalloutBlockProps {
  title: string
  content: React.ReactNode
  variant: CalloutVariant
}

const variantConfig = {
  'Key Insight': {
    icon: Lightbulb,
    bgClass: 'bg-muted-gold/10',
    borderClass: 'border-l-4 border-muted-gold',
    titleClass: 'text-muted-gold'
  },
  'Practical Reflection': {
    icon: Sparkles,
    bgClass: 'bg-deep-teal/10',
    borderClass: 'border-l-4 border-deep-teal',
    titleClass: 'text-deep-teal'
  },
  'Timing Note': {
    icon: Clock,
    bgClass: 'bg-ink-black/5',
    borderClass: 'border-l-4 border-ink-black',
    titleClass: 'text-ink-black'
  },
  'Modern Reading': {
    icon: Globe,
    bgClass: 'bg-ink-black/5',
    borderClass: 'border-l-4 border-mist-gray',
    titleClass: 'text-ink-black'
  }
}

export const CalloutBlock: React.FC<CalloutBlockProps> = ({
  title,
  content,
  variant
}) => {
  const config = variantConfig[variant]
  const Icon = config.icon

  return (
    <div className={`my-8 p-6 ${config.bgClass} ${config.borderClass}`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-5 h-5 ${config.titleClass}`} />
        <h4 className={`font-serif font-medium ${config.titleClass}`}>
          {title}
        </h4>
      </div>
      <div className="text-ink-black/80">
        {content}
      </div>
    </div>
  )
}
