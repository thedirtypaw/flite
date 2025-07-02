// Updated components/fliteProtein/ClientSearchWrapper.tsx
'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import SearchField from './SearchField'
import KnowledgeWrapper from './KnowledgeWrapper'

interface Props {
  tags: string[]
  tagList: string[]
  initialSearchQuery?: string
}

function ClientSearchWrapper({ tags, tagList, initialSearchQuery = '' }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery)

  // Update search query when URL changes
  useEffect(() => {
    const urlQuery = searchParams.get('q') || ''
    setSearchQuery(urlQuery)
  }, [searchParams])

  const handleSearch = (query: string) => {
    const params = new URLSearchParams()
    
    if (query.trim()) {
      params.set('q', query.trim())
      // Navigate to base knowledge page with search query
      router.push(`/knowledge?${params.toString()}`)
    } else {
      // If no query, go to base knowledge page
      router.push('/knowledge')
    }
  }

  return (
    <>
      <SearchField 
        onSearch={handleSearch}
        placeholder="Search articles..."
        initialValue={searchQuery}
      />
      <KnowledgeWrapper tags={tags} tagList={tagList} />
    </>
  )
}

export default ClientSearchWrapper
