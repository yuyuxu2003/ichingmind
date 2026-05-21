import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { ArticleCard } from '@/components/ArticleCard'
import { SectionTitle } from '@/components/SectionTitle'
import { getAllArticles, getAllTopics } from '@/lib/content'

export default function InsightsPage() {
  const articles = getAllArticles()
  const topics = getAllTopics()
  
  const categories = Array.from(new Set(articles.map(article => article.category)))

  return (
    <div className="bg-warm-white min-h-screen">
      <Hero
        title="Insights"
        subtitle="Thoughtful Essays"
        description="Explore the I Ching's application in modern life. Each hexagram is a starting point for reflection."
        variant="minimal"
      />
      
      <section className="py-8 border-b border-mist-gray">
        <Container>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-mist-gray mr-2">Categories:</span>
              <button className="px-3 py-1 text-sm bg-deep-teal text-warm-white">
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  className="px-3 py-1 text-sm bg-transparent text-ink-black hover:bg-ink-black/5 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-12">
        <Container>
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <SectionTitle
                title={`${articles.length} Articles`}
                subtitle="Sorted by date"
              />
              <div className="space-y-0">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
            
            <aside className="lg:col-span-1">
              <div className="sticky top-36">
                <h3 className="font-serif text-lg text-ink-black mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  <button className="px-2 py-1 text-xs bg-muted-gold text-warm-white">
                    All
                  </button>
                  {topics.map(topic => (
                    <button
                      key={topic.slug}
                      className="px-2 py-1 text-xs bg-ink-black/5 text-ink-black hover:bg-ink-black/10 transition-colors"
                    >
                      {topic.name}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  )
}
