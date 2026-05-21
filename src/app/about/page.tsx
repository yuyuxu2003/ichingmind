import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { QuoteBlock } from '@/components/QuoteBlock'
import { SectionTitle } from '@/components/SectionTitle'

export default function AboutPage() {
  return (
    <div className="bg-warm-white min-h-screen">
      <Hero
        title="关于"
        subtitle="认识作者"
        description="探索易经智慧如何在现代生活中发挥作用。"
        variant="minimal"
      />
      
      <section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="关于 IChingMind"
              subtitle="为什么创建这个项目"
            />
            
            <div className="space-y-6 text-ink-black/80 leading-relaxed">
              <p>
                IChingMind 是一个探索易经智慧在现代生活中应用的项目。这里不是算命的地方，而是思考的空间。
              </p>
              
              <p>
                易经（I Ching）是中国最古老的典籍之一，它描述了变化的模式和情境的原型。
                当我们把它当作一个观察框架而非预言工具时，它能帮助我们更清晰地理解当下，更明智地做出决策。
              </p>
            </div>
            
            <QuoteBlock
              quote="变化是唯一的永恒。智慧不在于预测未来，而在于理解当下。"
              author="IChingMind"
            />
            
            <div className="mt-12">
              <SectionTitle
                title="关于作者"
                subtitle="Shixin Yuan"
              />
              
              <div className="space-y-6 text-ink-black/80 leading-relaxed">
                <p>
                  我是 Shixin Yuan，IChingMind 的创建者。我对古代哲学和现代决策理论都有着浓厚的兴趣。
                </p>
                
                <p>
                  我相信，古老的智慧文本可以为现代人提供宝贵的思考框架。
                  通过这个项目，我希望分享我对易经的理解，以及它如何帮助我们在复杂的现代世界中找到方向。
                </p>
                
                <p>
                  如果你有任何问题或想法，欢迎通过邮件联系我：
                  <a 
                    href="mailto:yuyuxu2003@gmail.com" 
                    className="text-deep-teal hover:underline ml-1"
                  >
                    yuyuxu2003@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-mist-gray">
              <SectionTitle
                title="这个项目的目标"
                subtitle="我们追求什么"
              />
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-ink-black/5 p-6">
                  <h3 className="font-serif text-xl text-ink-black mb-3">深度思考</h3>
                  <p className="text-ink-black/70">
                    超越表面的理解，探索易经卦象的深层含义。
                  </p>
                </div>
                <div className="bg-ink-black/5 p-6">
                  <h3 className="font-serif text-xl text-ink-black mb-3">实用指引</h3>
                  <p className="text-ink-black/70">
                    将古老智慧转化为现代生活中可用的决策工具。
                  </p>
                </div>
                <div className="bg-ink-black/5 p-6">
                  <h3 className="font-serif text-xl text-ink-black mb-3">开放对话</h3>
                  <p className="text-ink-black/70">
                    欢迎不同的观点和解读，共同成长。
                  </p>
                </div>
                <div className="bg-ink-black/5 p-6">
                  <h3 className="font-serif text-xl text-ink-black mb-3">持续学习</h3>
                  <p className="text-ink-black/70">
                    易经是一个终身学习的过程，我们一起前行。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
