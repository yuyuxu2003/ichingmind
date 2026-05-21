import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { SectionTitle } from '@/components/SectionTitle'

export default function SubscribePage() {
  return (
    <div className="bg-warm-white min-h-screen">
      <Hero
        title="订阅"
        subtitle="加入思考社区"
        description="每周收到精选的易经洞见，帮助你在现代生活中做出更明智的决策。"
        variant="minimal"
      />
      
      <section className="py-12">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="bg-deep-teal p-8 md:p-12">
              <NewsletterSignup
                title="订阅我们的周刊"
                description="每周一封邮件，包含最新的文章、卦象解读和思考练习。无垃圾邮件，随时可取消订阅。"
                placeholder="输入您的邮箱地址"
                buttonText="订阅"
              />
            </div>
            
            <div className="mt-12">
              <SectionTitle
                title="订阅者将获得"
                subtitle="专属内容"
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-muted-gold text-warm-white rounded-full flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-ink-black mb-1">每周洞察</h3>
                    <p className="text-ink-black/70">
                      精选的易经解读和思考文章，直接发送到您的邮箱。
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-muted-gold text-warm-white rounded-full flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-ink-black mb-1">独家内容</h3>
                    <p className="text-ink-black/70">
                      仅向订阅者开放的深度分析和实用练习。
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-muted-gold text-warm-white rounded-full flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-ink-black mb-1">提前预览</h3>
                    <p className="text-ink-black/70">
                      在公开发布前抢先阅读新文章和新内容。
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-muted-gold text-warm-white rounded-full flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-ink-black mb-1">随时取消</h3>
                    <p className="text-ink-black/70">
                      一键取消订阅，没有任何附加条件。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-mist-gray">
              <SectionTitle
                title="常见问题"
                subtitle="FAQ"
              />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="font-serif text-lg text-ink-black mb-2">多久发送一次邮件？</h3>
                  <p className="text-ink-black/70">
                    每周一次，通常在周末发送。我们尊重您的时间，不会过度发送邮件。
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-lg text-ink-black mb-2">我的邮箱会被分享吗？</h3>
                  <p className="text-ink-black/70">
                    绝对不会。您的邮箱地址仅用于发送 IChingMind 的内容，不会与任何第三方分享。
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-lg text-ink-black mb-2">如何取消订阅？</h3>
                  <p className="text-ink-black/70">
                    每封邮件底部都有取消订阅链接，点击即可一键取消，没有任何麻烦。
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
