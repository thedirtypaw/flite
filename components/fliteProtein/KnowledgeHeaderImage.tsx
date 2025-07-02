'use client';

import { useState } from 'react'
import TagBar from './TagBar'
import ClientKnowledgeGrid from './ClientKnowledgeGrid'
import SearchField from './SearchField'

interface Props {
  tags: string[]
  tagList: string[]
}

function KnowledgeWrapper({ tags, tagList }: Props) {
  const [sort, setSort] = useState<'latest' | 'oldest' | 'az' | 'za' | 'views'>('latest')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // You can add search logic here or pass it down to ClientKnowledgeGrid
    console.log('Searching for:', query)
  }

  return (
    <>
      {/* Search Field */}
      <SearchField onSearch={handleSearch} />
      
      {/* Tag Bar */}
      <div className="w-full mb-10">
        <TagBar tags={tags} sort={sort} setSort={setSort} />
      </div>

      {tagList.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SSR rendering could go here */}
        </div>
      ) : (
        <ClientKnowledgeGrid sort={sort} searchQuery={searchQuery} />
      )}
    </>
  )
}

export default KnowledgeWrapper
