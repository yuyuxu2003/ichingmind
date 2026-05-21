'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { SectionTitle } from '@/components/SectionTitle'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-warm-white min-h-screen">
      <Hero
        title="联系"
        subtitle="与我们交流"
        description="有任何问题、想法或建议？我们很乐意听取您的意见。"
        variant="minimal"
      />
      
      <section className="py-12">
        <Container>
          <div className="max-w-2xl mx-auto">
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-deep-teal text-warm-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif text-ink-black mb-4">消息已发送！</h2>
                <p className="text-ink-black/70">
                  感谢您的来信，我们会尽快回复您。
                </p>
              </div>
            ) : (
              <>
                <SectionTitle
                  title="发送消息"
                  subtitle="填写表单"
                />
                
                <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ink-black mb-2">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-transparent border border-mist-gray text-ink-black placeholder-mist-gray focus:outline-none focus:border-deep-teal transition-colors"
                        placeholder="您的姓名"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ink-black mb-2">
                        邮箱 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-transparent border border-mist-gray text-ink-black placeholder-mist-gray focus:outline-none focus:border-deep-teal transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-ink-black mb-2">
                      主题 *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-transparent border border-mist-gray text-ink-black focus:outline-none focus:border-deep-teal transition-colors"
                    >
                      <option value="">请选择主题</option>
                      <option value="general">一般咨询</option>
                      <option value="feedback">反馈建议</option>
                      <option value="collaboration">合作邀请</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink-black mb-2">
                      消息 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-transparent border border-mist-gray text-ink-black placeholder-mist-gray focus:outline-none focus:border-deep-teal transition-colors resize-none"
                      placeholder="请输入您的消息..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-deep-teal text-warm-white font-medium hover:bg-deep-teal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '发送中...' : '发送消息'}
                  </button>
                </form>
                
                <div className="mt-12 pt-8 border-t border-mist-gray">
                  <SectionTitle
                    title="其他联系方式"
                    subtitle="直接联系"
                  />
                  
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-ink-black/5 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-deep-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-mist-gray">邮箱</p>
                        <a 
                          href="mailto:yuyuxu2003@gmail.com" 
                          className="text-deep-teal hover:underline"
                        >
                          yuyuxu2003@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-ink-black/5 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-deep-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-mist-gray">作者</p>
                        <p className="text-ink-black">Shixin Yuan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </Container>
      </section>
    </div>
  )
}
