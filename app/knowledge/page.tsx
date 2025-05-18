type ArticleInput = {
  title: string
  description: string
  slug: { current: string }
  publishedAt: string
  mainImage?: { asset?: { _ref?: string } }
  articleType?: string
}

type PageInput = {
  title: string
  description: string
  url: string
}

type JsonLdInput =
  | { type: 'page', data: PageInput }
  | { type: 'article', data: ArticleInput }

export function generateJsonLd(input: JsonLdInput): object {
  switch (input.type) {
    case 'page':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: input.data.title,
        description: input.data.description,
        url: input.data.url
      }

    case 'article': {
      const article = input.data
      const baseUrl = 'https://flite.ro'
      const slug = article.slug?.current || 'article'
      const imageBase = article.mainImage?.asset?._ref
        ? `https://cdn.sanity.io/images/5senu7u5/production/${article.mainImage.asset._ref
            .replace('-webp', '')
            .replace(/-(\d+x\d+)\..+$/, '')}.jpg?rect=0,229,942,492&w=1200&h=627&fm=webp`
        : ''

      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        datePublished: article.publishedAt,
        image: imageBase,
        author: {
          '@type': 'Organization',
          name: 'Flite',
          url: 'https://flite.ro'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Flite',
          logo: {
            '@type': 'ImageObject',
            url: 'https://flite.ro/logo.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${baseUrl}/article/${slug}`
        },
        url: `${baseUrl}/article/${slug}`
      }
    }

    default:
      return {}
  }
}
