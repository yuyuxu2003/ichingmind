'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TOCProps {
  items: TOCItem[]
}

export const TOC: React.FC<TOCProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    items.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const tocContent = (
    <nav>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={`text-left w-full text-sm transition-colors hover:text-deep-teal ${
                item.level === 2 ? 'pl-0' : item.level === 3 ? 'pl-4' : 'pl-8'
              } ${
                activeId === item.id
                  ? 'text-deep-teal font-medium'
                  : 'text-mist-gray'
              }`}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )

  return (
    <>
      {/* Mobile Collapsible TOC */}
      <div className="md:hidden mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 border border-mist-gray bg-warm-white"
        >
          <span className="font-serif text-ink-black">目录</span>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        {isOpen && (
          <div className="p-4 border border-t-0 border-mist-gray">
            {tocContent}
          </div>
        )}
      </div>

      {/* Desktop Sidebar TOC */}
      <aside className="hidden md:block sticky top-8 self-start">
        <div className="border-l border-mist-gray pl-6">
          <h4 className="text-sm font-serif text-ink-black mb-4">目录</h4>
          {tocContent}
        </div>
      </aside>
    </>
  )
}
