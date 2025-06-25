import { Metadata } from 'next'
import { getArticles, getArticlesByTag } from '../../lib/getArticles'
import ArticleBox from '../../components/fliteProtein/ArticleBox'
import SeoHead from '../../components/SeoHead'
import { TagBar } from '../../components/fliteProtein/TagBar'

export const metadata: Metadata = {
  title: 'Knowledge Base – Flite',
  description: 'Science-backed articles for gut health. Dive into research, insights, and practical guidance.',
  keywords: ['gut health', 'nutrition', 'articles', 'vegan research', 'knowledge base'],
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

type PageProps = {
  searchParams: {
    tag?: string
    sort?: string
  }
}

export default async function KnowledgePage(props: PageProps) {
  const searchParams = await props.searchParams
  const tag = searchParams.tag?.toLowerCase()
  const sort = searchParams.sort


  const rawArticles = tag
    ? await getArticlesByTag(tag)
    : await getArticles()

  // Flatten all tags
  const rawTags = rawArticles.flatMap((article) =>
    Array.isArray(article.tags) ? article.tags : []
  ) as string[]

  const uniqueTags = Array.from(new Set(rawTags)).sort()
  const sortingOptions = ['Newest First', 'Oldest First', 'A–Z', 'Z–A']

  const articles = [...rawArticles].sort((a, b) => {
    switch (sort) {
      case 'Oldest First':
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      case 'A–Z':
        return a.title.localeCompare(b.title)
      case 'Z–A':
        return b.title.localeCompare(a.title)
      default:
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime() // Newest First
    }
  })

  return (
    <>
      <SeoHead
        title={metadata.title as string}
        description={metadata.description as string}
        image="https://flite.ro/og-knowledge.webp"
        url="https://flite.ro/knowledge"
      />

      <main className="min-h-screen px-[5%] py-10 bg-[#f8f8f1]">
        <h1 className="text-4xl font-bold text-center mb-10 text-green-900">
          {tag ? `Articles tagged "${tag}"` : 'Knowledge Base'}
        </h1>

        {/* Tag and Sort Menu - Fully Independent */}
        <div className="w-full mb-10">
          <TagBar uniqueTags={uniqueTags} sortingOptions={sortingOptions} />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <ArticleBox
              key={article._id}
              href={`/article/${article.slug.current}`}
              title={article.title}
              thumb={article.thumbRef}
              tags={article.tags}
              publishedAt={article.publishedAt}
              body={article.body}
            />
          ))}
        </div>
      </main>


    </>
  )
}
