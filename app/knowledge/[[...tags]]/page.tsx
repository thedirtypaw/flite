// @ts-nocheck
import { Metadata } from 'next'
import { getArticlesByTag, getAllTags } from '../../../lib/getArticles'
import SeoHead from '../../../components/SeoHead'
import KnowledgeWrapper from '../../../components/fliteProtein/KnowledgeWrapper'
import ArticleBox from '../../../components/fliteProtein/ArticleBox'

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

export default async function KnowledgePage({ params }: { params: { tags?: string[] } }) {
    const tagList = Array.isArray(params.tags)
    
    ? params.tags.map((t) => decodeURIComponent(t).replace(/-/g, ' '))
    : []
  const uniqueTags = await getAllTags()

  const filteredArticles = tagList.length > 0
    ? await getArticlesByTag(tagList)
    : []

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
          {tagList.length ? `Articles tagged: ${tagList.join(', ')}` : 'Knowledge Base'}
        </h1>

        {tagList.length > 0 ? (
          <>
            <KnowledgeWrapper tags={uniqueTags} tagList={tagList} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles
                .filter((a) => !!a.slug?.current)
                .map((article) => (
                  <ArticleBox
                    key={article._id}
                    href={`/article/${article.slug.current}`}
                    {...article}
                  />
                ))}

            </div>
          </>
        ) : (
          <KnowledgeWrapper tags={uniqueTags} tagList={[]} />
        )}
      </main>
    </>
  )
}
