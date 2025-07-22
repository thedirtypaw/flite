// Updated app/knowledge/[[...tags]]/page.tsx
import { Metadata } from 'next'
import { getArticlesByTag, getAllTags, searchArticles } from '../../../lib/getArticles'
import ClientSearchWrapper from '../../../components/fliteProtein/ClientSearchWrapper'

export async function generateMetadata({
  params,
  searchParams
}: {
  params: Promise<{ tags?: string[] }>,
  searchParams: Promise<{ q?: string }>
}): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const tagList = resolvedParams?.tags || [];
  const searchQuery = resolvedSearchParams?.q;

  // This makes shouldIndex = false (0 < 5)
  const articles = searchQuery
    ? await searchArticles(searchQuery, tagList)
    : tagList.length
      ? await getArticlesByTag(tagList)
      : [];

  // SEO Rules: Only index if ≥5 articles AND no search query
  const shouldIndex = articles.length >= 5 && !searchQuery;

  if (shouldIndex && tagList.length > 0) {
    return {
      title: `${tagList.join(', ')} Articles – Flite`,
      description: `${articles.length} science-backed articles about ${tagList.join(', ')}`,
      keywords: ['gut health', 'nutrition', 'articles', 'vegan research', 'knowledge base'],
      openGraph: {
        title: `${tagList.join(', ')} Articles – Flite`,
        description: `${articles.length} science-backed articles about ${tagList.join(', ')}`,
        url: `https://flite.ro/knowledge/${tagList.join('/')}`,
        images: [
          {
            url: 'https://flite.ro/og-knowledge.webp',
            width: 1200,
            height: 627,
            alt: `${tagList.join(', ')} Articles – Flite`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${tagList.join(', ')} Articles – Flite`,
        description: `${articles.length} science-backed articles about ${tagList.join(', ')}`,
        images: ['https://flite.ro/og-knowledge.webp'],
      },
    }
  }

  return {
    title: searchQuery
      ? `Search: ${searchQuery} – Flite`
      : 'Knowledge Base – Flite',
    description: searchQuery
      ? `Search results for "${searchQuery}" in our science-backed articles.`
      : 'Science-backed articles for gut health. Dive into research, insights, and practical guidance.',
    keywords: ['gut health', 'nutrition', 'articles', 'vegan research', 'knowledge base'],
    robots: { index: false }, // noindex for search results and <5 articles
    alternates: {
      canonical: 'https://flite.ro/knowledge'
    },
    openGraph: {
      title: 'Knowledge Base – Flite',
      description: 'Science-backed articles for gut health. Dive into research, insights, and practical guidance.',
      url: 'https://flite.ro/knowledge',
      images: [
        {
          url: 'https://flite.ro/og-knowledge.webp',
          width: 1200,
          height: 627,
          alt: 'Knowledge Base – Flite',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Knowledge Base – Flite',
      description: 'Science-backed articles for gut health. Dive into research, insights, and practical guidance.',
      images: ['https://flite.ro/og-knowledge.webp'],
    },
  }
}

export default async function KnowledgePage({
  params,
  searchParams
}: {
  params: Promise<{ tags?: string[] }>,
  searchParams: Promise<{ q?: string }>
}) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams

  const tagList = resolvedParams?.tags && Array.isArray(resolvedParams.tags)
    ? resolvedParams.tags.map((t) => decodeURIComponent(t).replace(/-/g, ' '))
    : []

  const searchQuery = resolvedSearchParams?.q || ''
  const uniqueTags = await getAllTags()

  // Get articles based on search or tags
  const filteredArticles = searchQuery
    ? await searchArticles(searchQuery, tagList)  // Search results
    : tagList.length > 0
      ? await getArticlesByTag(tagList)           // Tag filtered results
      : await getArticlesByTag([])                // All articles when no search/tags


  const articleCount = filteredArticles.length;
  const shouldIndex = articleCount >= 5 && !searchQuery;

  // Dynamic title based on context
  const getPageTitle = () => {
    if (searchQuery && tagList.length > 0) {
      return `"${searchQuery}" in ${tagList.join(', ')}`
    }
    if (searchQuery) {
      return `Search: "${searchQuery}"`
    }
    if (tagList.length > 0) {
      return `Articles tagged: ${tagList.join(', ')}`
    }
    return 'Knowledge Base'
  }


  return (
    <>
      <main className="flex flex-col w-full overflow-hidden">
        <div className="content-padding">
          <h1 className="text-4xl font-bold text-center mb-10 text-green-900">
            Knowledge Base
          </h1>

          <ClientSearchWrapper
            tags={uniqueTags}
            tagList={tagList}
            initialSearchQuery={searchQuery}
            articles={filteredArticles}
          />
        </div>
      </main>
    </>
  )
}
