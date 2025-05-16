import { getArticles } from '../../lib/getArticles'
import { HeroText } from './HeroText'
import KnowledgeHeaderImage from './KnowledgeHeaderImage'
import Link from 'next/link'
import { urlFor } from '../../sanity/lib/image'
import { TagBar } from './TagBar'

export default async function KnowledgePage() {
  const articles = await getArticles()

  const rawTags = articles.flatMap((article) =>
    Array.isArray(article.tags) ? article.tags : []
  ) as string[]

  const uniqueTags = Array.from(new Set(rawTags)).sort()
  const sortingOptions = ['Most Used', 'Newest First', 'Alphabetical']

  return (
    <div className="flex w-full overflow-hidden flex-col bg-[#f8f8f1]">
      {/* Hero section with 2-column split */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-[5%] py-16 gap-8">
        <div className="text-center md:text-left">
          <HeroText
            title="Knowledge Base"
            heading="Fuel your gut with facts"
            subheading="Explore science, research, and application"
          />
        </div>
        <div className="flex justify-center">
          <KnowledgeHeaderImage />
        </div>
      </div>

      {/* Tag bar */}
      <TagBar uniqueTags={uniqueTags} sortingOptions={sortingOptions} />

      {/* Article grid section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-[5%] py-10">
        {articles.map((article) => (
          <Link
            href={`/article/${article.slug.current}`}
            key={article._id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
          >
            {article.thumbRef && (
              <img
                src={urlFor({ _ref: article.thumbRef }).format('webp').url()}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
            )}
            <div className="p-4">
              <div className="text-xs font-medium text-green-700 uppercase mb-1">
                {Array.isArray(article.tags) ? article.tags.join(', ') : ''}
              </div>
              <div className="text-xs text-gray-500 mb-2">
                {article.publishedAt
                  ? new Date(article.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                  : ''}
              </div>
              <h3 className="text-lg font-bold mb-1 text-gray-900">
                {article.title}
              </h3>
              <p className="text-sm text-gray-700 line-clamp-3">
                {article.excerpt || ''}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
