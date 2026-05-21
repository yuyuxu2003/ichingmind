import Link from 'next/link'
import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <div className="bg-warm-white min-h-screen flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center py-20">
          <div className="mb-8">
            <div className="inline-block text-8xl font-serif text-muted-gold mb-4">
              ䷀
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-ink-black mb-4">
            页面未找到
          </h1>
          
          <p className="text-xl text-mist-gray mb-8 font-serif italic">
            "变化是唯一的永恒。" — 易经
          </p>
          
          <p className="text-ink-black/70 mb-10">
            您要找的页面可能已经移动、删除，或者从未存在过。
            让我们回到起点，重新开始探索。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-deep-teal text-warm-white font-medium hover:bg-deep-teal/90 transition-colors"
            >
              返回首页
            </Link>
            <Link
              href="/insights"
              className="px-8 py-3 border border-mist-gray text-ink-black font-medium hover:border-deep-teal hover:text-deep-teal transition-colors"
            >
              浏览文章
            </Link>
          </div>
          
          <div className="mt-16 pt-8 border-t border-mist-gray">
            <p className="text-sm text-mist-gray">
              如果您认为这是一个错误，请通过
              <Link href="/contact" className="text-deep-teal hover:underline mx-1">
                联系页面
              </Link>
              告诉我们。
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
