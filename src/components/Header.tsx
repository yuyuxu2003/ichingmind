'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Container } from './Container'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Insights', href: '/insights' },
  { name: 'Hexagrams', href: '/hexagrams' },
  { name: 'Topics', href: '/topics' },
  { name: 'About', href: '/about' },
  { name: 'Subscribe', href: '/subscribe' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-warm-white border-b border-mist-gray/30">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-deep-teal rounded-full flex items-center justify-center">
              <span className="text-warm-white font-serif font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-serif font-semibold text-ink-black">IChingMind</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-ink-black hover:text-deep-teal transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-ink-black hover:text-deep-teal"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden border-t border-mist-gray/30 bg-warm-white">
          <Container className="py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-ink-black hover:text-deep-teal transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
