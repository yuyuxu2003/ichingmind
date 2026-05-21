import Link from 'next/link'
import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { SectionTitle } from '@/components/SectionTitle'
import { FeaturedArticleCard } from '@/components/FeaturedArticleCard'
import { HexagramCard } from '@/components/HexagramCard'
import { TopicCard } from '@/components/TopicCard'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { QuoteBlock } from '@/components/QuoteBlock'
import { getFeaturedArticles, HEXAGRAMS, getAllTopics } from '@/lib/content'

export default function Home() {
  const featuredArticles = getFeaturedArticles()
  const topics = getAllTopics().slice(0, 6)
  const hexagrams = HEXAGRAMS

  return (
    <div className="bg-warm-white min-h-screen">
      <Hero
        title="IChingMind"
        subtitle="Ancient Wisdom for Modern Decisions"
        description="Exploring the profound insights of the I Ching through contemporary perspectives. Discover timeless guidance for your personal and professional journey."
        ctaText="探索洞察"
        ctaLink="/insights"
      />

      {featuredArticles.length > 0 && (
        <section className="py-16 border-b border-mist-gray">
          <Container>
            <SectionTitle
              title="精选文章"
              subtitle="深度洞察，启人心智"
              align="center"
            />
            <div className="space-y-6">
              {featuredArticles.map((article) => (
                <FeaturedArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 border-b border-mist-gray">
        <Container>
          <QuoteBlock
            quote="变化是唯一的永恒。在易经的智慧中，我们学会与变动共舞，而非抗拒。"
            author="IChingMind"
          />
        </Container>
      </section>

      <section className="py-16 border-b border-mist-gray">
        <Container>
          <SectionTitle
            title="网站理念"
            subtitle="我们的方法"
            align="left"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-ink-black/5 p-6">
              <h3 className="font-serif text-xl text-ink-black mb-3">深度思考</h3>
              <p className="text-ink-black/70">
                超越表面的理解，深入探究易经卦象的深层含义及其在现代生活中的应用。
              </p>
            </div>
            <div className="bg-ink-black/5 p-6">
              <h3 className="font-serif text-xl text-ink-black mb-3">实用指引</h3>
              <p className="text-ink-black/70">
                将古老的智慧转化为切实可行的建议，帮助你在决策时找到清晰的方向。
              </p>
            </div>
            <div className="bg-ink-black/5 p-6">
              <h3 className="font-serif text-xl text-ink-black mb-3">持续成长</h3>
              <p className="text-ink-black/70">
                易经不是答案手册，而是终身学习和自我发现的旅程。
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 border-b border-mist-gray">
        <Container>
          <SectionTitle
            title="按卦象浏览"
            subtitle="六十四卦中的智慧"
            align="left"
            actionLink="/hexagrams"
            actionText="查看全部"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {hexagrams.map((hexagram) => (
              <HexagramCard key={hexagram.id} hexagram={hexagram} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 border-b border-mist-gray">
        <Container>
          <SectionTitle
            title="按主题浏览"
            subtitle="探索感兴趣的话题"
            align="left"
            actionLink="/topics"
            actionText="查看全部"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <TopicCard key={topic.slug} topic={topic} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-deep-teal">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-warm-white mb-4">
              加入我们的思考社区
            </h2>
            <p className="text-warm-white/80 mb-8">
              每周收到精选的易经洞见，帮助你在现代生活中做出更明智的决策。
            </p>
            <NewsletterSignup />
          </div>
        </Container>
      </section>
    </div>
  )
}
