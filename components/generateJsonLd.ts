import { urlFor } from '../sanity/lib/image'

export function generateJsonLd(article) {
    const baseUrl = 'https://flite.ro'
    const url = `${baseUrl}/article/${article.slug.current}`
  
    const isFAQ = article.articleType === 'faq'
  
    if (isFAQ) {
      const faqBlocks = article.body
        .filter(block => block._type === 'block' && block.style === 'normal')
        .map(block => ({
          question: block.children?.[0]?.text || '',
          answer: block.children?.slice(1)?.map(child => child.text).join(' ') || ''
        }))
        .filter(q => q.question && q.answer)
  
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqBlocks.map(({ question, answer }) => ({
          '@type': 'Question',
          'name': question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': answer
          }
        }))
      }
    }
  
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': article.title,
      'datePublished': article.publishedAt,
      'dateModified': article._updatedAt,
      'image': article.mainImage ? urlFor(article.mainImage).width(1200).height(627).format('webp').url() : '',

      'author': {
        '@type': 'Organization',
        'name': 'Flite'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Flite',
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}/logo.png`
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': url
      },
      'url': url,
      'description': article.description || ''
    }
  }
  