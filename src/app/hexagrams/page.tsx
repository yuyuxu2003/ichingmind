import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { HexagramCard } from '@/components/HexagramCard'
import { SectionTitle } from '@/components/SectionTitle'
import { HEXAGRAMS } from '@/lib/content'

export default function HexagramsPage() {
  return (
    <div className="bg-warm-white min-h-screen">
      <Hero
        title="六十四卦"
        subtitle="变化的模式"
        description="每一卦都描述了一种情境模式，帮助你理解当下并做出明智的决策。"
        variant="minimal"
      />
      
      <section className="py-12">
        <Container>
          <SectionTitle
            title="所有卦象"
            subtitle="按编号排列"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HEXAGRAMS.map((hexagram) => (
              <HexagramCard key={hexagram.id} hexagram={hexagram} />
            ))}
          </div>
          
          {HEXAGRAMS.length === 0 && (
            <div className="text-center py-12 text-mist-gray">
              正在添加更多卦象...
            </div>
          )}
        </Container>
      </section>
    </div>
  )
}
