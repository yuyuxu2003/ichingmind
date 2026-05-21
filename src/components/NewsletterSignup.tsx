'use client'

import React, { useState } from 'react'
import { Mail, Check } from 'lucide-react'

interface NewsletterSignupProps {
  title?: string
  description?: string
  placeholder?: string
  buttonText?: string
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = "订阅更新",
  description = "获取最新的洞察和思考，直接发送到您的邮箱。",
  placeholder = "输入您的邮箱地址",
  buttonText = "订阅"
}) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    // 模拟 API 调用
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <div className="bg-deep-teal text-warm-white p-8 md:p-10">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-6 h-6 text-muted-gold" />
          <h3 className="text-xl font-serif">{title}</h3>
        </div>
        <p className="text-warm-white/80 mb-6">
          {description}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-4 py-3 bg-warm-white/10 border border-warm-white/20 text-warm-white placeholder-warm-white/50 focus:outline-none focus:border-muted-gold"
            disabled={status === 'loading' || status === 'success'}
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="px-6 py-3 bg-muted-gold text-warm-white font-medium hover:bg-warm-white hover:text-deep-teal transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'success' ? (
              <>
                <Check className="w-4 h-4" />
                已订阅
              </>
            ) : status === 'loading' ? (
              '订阅中...'
            ) : (
              buttonText
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
