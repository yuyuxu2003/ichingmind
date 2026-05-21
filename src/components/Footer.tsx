import Link from 'next/link'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="bg-ink-black text-warm-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-deep-teal rounded-full flex items-center justify-center">
                <span className="text-warm-white font-serif font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-serif font-semibold">IChingMind</span>
            </div>
            <p className="text-mist-gray text-sm leading-relaxed mb-6">
              Exploring the ancient wisdom of the I Ching through modern perspectives.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-mist-gray hover:text-warm-white transition-colors text-sm">
                Twitter
              </a>
              <a href="#" className="text-mist-gray hover:text-warm-white transition-colors text-sm">
                Instagram
              </a>
              <a href="#" className="text-mist-gray hover:text-warm-white transition-colors text-sm">
                Email
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4 text-warm-white">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-mist-gray hover:text-warm-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-mist-gray hover:text-warm-white text-sm transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/hexagrams" className="text-mist-gray hover:text-warm-white text-sm transition-colors">
                  Hexagrams
                </Link>
              </li>
              <li>
                <Link href="/topics" className="text-mist-gray hover:text-warm-white text-sm transition-colors">
                  Topics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4 text-warm-white">Connect</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-mist-gray hover:text-warm-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/subscribe" className="text-mist-gray hover:text-warm-white text-sm transition-colors">
                  Subscribe
                </Link>
              </li>
              <li>
                <a href="#" className="text-mist-gray hover:text-warm-white text-sm transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-mist-gray hover:text-warm-white text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4 text-warm-white">Newsletter</h4>
            <p className="text-mist-gray text-sm mb-4">
              Join our community to receive weekly insights and inspiration.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border border-mist-gray/30 rounded px-4 py-2 text-sm text-warm-white placeholder-mist-gray focus:outline-none focus:border-muted-gold"
              />
              <button
                type="submit"
                className="bg-deep-teal hover:bg-deep-teal/90 text-warm-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-mist-gray/20 pt-8">
          <p className="text-mist-gray text-sm text-center">
            © {new Date().getFullYear()} IChingMind. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
