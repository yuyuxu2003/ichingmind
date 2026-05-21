import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { TopicCard } from '@/components/TopicCard'
import { SectionTitle } from '@/components/SectionTitle'
import { getAllTopics } from '@/lib/content'

export default function TopicsPage() {
  const topics = getAllTopics()

  return (
    <div className="bg-warm-white min-h-screen">
      <Hero
        title="主题"
        subtitle="按兴趣探索"
        description="浏览不同的思考主题，从决策策略到个人成长，找到你感兴趣的内容。"
        variant="minimal"
      />
      
      <section className="py-12">
        <Container>
          <SectionTitle
            title="所有主题"
            subtitle={`${topics.length} 个主题`}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <TopicCard key={topic.slug} topic={topic} />
            ))}
          </div>
          
          {topics.length === 0 && (
            <div className="text-center py-12 text-mist-gray">
              正在添加更多主题...
            </div>
          )}
        </Container>
      </section>
    </div>
  )
}
