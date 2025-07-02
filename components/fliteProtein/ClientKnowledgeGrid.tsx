import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import ArticleBox from './ArticleBox'
import SkeletonArticleBox from './SkeletonArticleBox'
import { Article } from './types'

type Props = {
  sort: 'latest' | 'oldest' | 'az' | 'za' | 'views'
  searchQuery?: string  // ← ADD THIS
}

function ClientKnowledgeGrid({ sort, searchQuery = '' }: Props) {
  const [articles, setArticles] = useState<Article[] | null>(null)

  const pathname = usePathname()
  const selectedTags = useMemo(() => {
    const parts = pathname.split('/').filter(Boolean)
    const tagSegment = parts.includes('knowledge') ? parts.slice(parts.indexOf('knowledge') + 1) : []
    return tagSegment
  }, [pathname])
  

  useEffect(() => {
    fetch('/api/articles')
      .then((res) => res.json())
      .then(setArticles)
  }, [])

  const filtered = useMemo(() => {
    if (!articles) return []
    
    let result = articles
    
    // Filter by tags
    if (selectedTags.length > 0) {
      result = result.filter(article =>
        selectedTags.every(tag => article.tags?.includes(tag))
      )
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      result = result.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.body?.toLowerCase().includes(query) ||
        article.tags?.some(tag => tag.toLowerCase().includes(query))
      )
    }
    
    return result
  }, [articles, selectedTags, searchQuery])

  const sorted = useMemo(() => {
    if (!filtered) return []
    const sortedCopy = [...filtered]

    switch (sort) {
      case 'oldest':
        return sortedCopy.sort((a, b) => a.publishedAt.localeCompare(b.publishedAt))
      case 'az':
        return sortedCopy.sort((a, b) => a.title.localeCompare(b.title))
      case 'za':
        return sortedCopy.sort((a, b) => b.title.localeCompare(a.title))
      case 'views':
        return sortedCopy.sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
      case 'latest':
      default:
        return sortedCopy.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    }
  }, [filtered, sort])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {!articles
        ? Array.from({ length: 12 }).map((_, i) => <SkeletonArticleBox key={i} />)
        : sorted.map(article => (
          <ArticleBox
            key={article._id}
            href={`/article/${article.slug.current}`}
            title={article.title}
            thumb={article.thumb}
            tags={article.tags}
            publishedAt={article.publishedAt}
            body={article.body}
            views={article.views ?? 0}
          />
        ))}
    </div>
  )
}

export default ClientKnowledgeGrid
