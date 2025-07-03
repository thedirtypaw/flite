// components/fliteProtein/KnowledgeWrapper.tsx
'use client'

import { useState, useMemo } from 'react'
import TagBar from './TagBar'
import ArticleBox from './ArticleBox'

interface Props {
  tags: string[]
  tagList: string[]
  searchQuery?: string
  articles: any[]
}

function KnowledgeWrapper({ tags, tagList, searchQuery = '', articles }: Props) {
  const [sort, setSort] = useState<'latest' | 'oldest' | 'az' | 'za' | 'views'>('latest')

  // CLIENT-SIDE SORTING OF SSR ARTICLES
  const sortedArticles = useMemo(() => {
    const sorted = [...articles]
    
    switch (sort) {
      case 'latest':
        return sorted.sort((a, b) => new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime())
      case 'oldest':
        return sorted.sort((a, b) => new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime())
      case 'az':
        return sorted.sort((a, b) => a.title.localeCompare(b.title))
      case 'za':
        return sorted.sort((a, b) => b.title.localeCompare(a.title))
      case 'views':
        return sorted.sort((a, b) => (b.views || 0) - (a.views || 0))
      default:
        return sorted
    }
  }, [articles, sort])

  return (
    <>
      <div className="w-full mb-10">
        <TagBar tags={tags} sort={sort} setSort={setSort} />
      </div>

      {/* Article area - consistent height */}
      <div className="min-h-[200px]">
        {sortedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedArticles
              .filter((a) => !!a.slug?.current)
              .map((article) => (
                <ArticleBox
                  key={article._id}
                  href={`/article/${article.slug.current}`}
                  {...article}
                />
              ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <h2 className="text-4xl font-bold text-pink-500">
              No article found with that description
            </h2>
          </div>
        )}
      </div>
    </>
  )
}

export default KnowledgeWrapper
