'use client'

import { useState } from 'react'
import TagBar from './TagBar'
import ClientKnowledgeGrid from './ClientKnowledgeGrid'

type Props = {
  tags: string[]
  tagList: string[]
}

export default function KnowledgeWrapper({ tags, tagList }: Props) {
  const [sort, setSort] = useState<'latest' | 'oldest' | 'az' | 'za' | 'views'>('latest')

  return (
    <>
      <div className="w-full mb-10">
        <TagBar tags={tags} sort={sort} setSort={setSort} />
      </div>

      {tagList.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SSR rendering could go here */}
        </div>
      ) : (
        <ClientKnowledgeGrid sort={sort} />
      )}
    </>
  )
}
