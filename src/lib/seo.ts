import { Article } from './types'

export const siteConfig = {
  title: 'IChingMind',
  description: 'Ancient Wisdom for Modern Decisions — A reflective exploration of the I Ching as a living framework for timing, change, strategy, and inner clarity.',
  url: 'https://ichingmind.com',
  ogImage: '/images/og-default.jpg',
  twitter: {
    handle: '@ichingmind',
    site: '@ichingmind',
    cardType: 'summary_large_image',
  },
}

export interface SEOProps {
  title?: string
  description?: string
  url?: string
  image?: string
  article?: Article
}

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  url = siteConfig.url,
  image = siteConfig.ogImage,
  article,
}: SEOProps = {}) {
  const finalTitle = article 
    ? `${article.seoTitle} | ${siteConfig.title}` 
    : title === siteConfig.title 
      ? title 
      : `${title} | ${siteConfig.title}`

  const finalDescription = article ? article.seoDescription : description

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: article?.tags.join(', ') || 'I Ching, philosophy, strategy, timing, change, wisdom',
    authors: article ? [{ name: article.author }] : [],
    openGraph: {
      type: article ? 'article' : 'website',
      locale: 'en_US',
      url,
      title: finalTitle,
      description: finalDescription,
      siteName: siteConfig.title,
      images: [
        {
          url: article?.coverImage || image,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: siteConfig.twitter.cardType,
      site: siteConfig.twitter.site,
      creator: siteConfig.twitter.handle,
      title: finalTitle,
      description: finalDescription,
      images: [article?.coverImage || image],
    },
    alternates: {
      canonical: url,
    },
  }
}

export function constructArticleJsonLd(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.title,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/icons/icon-512x512.png`,
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    image: article.coverImage ? `${siteConfig.url}${article.coverImage}` : `${siteConfig.url}${siteConfig.ogImage}`,
    keywords: article.tags.join(', '),
  }
}
