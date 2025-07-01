'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useMemo, useState } from 'react'
import SortDropdown from './SortDropdown'

type Props = {
  tags: string[]
  sort: 'latest' | 'oldest' | 'az' | 'za' | 'views'
  setSort: (sort: Props['sort']) => void
}

export default function TagBar({ tags }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const selectedTags = useMemo(() => {
    return pathname.split('/').filter(Boolean).slice(1)
  }, [pathname])

  const toggleTag = useCallback(
    (tag: string) => {
      const base = '/knowledge'
      const nextTags = selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags, tag]
      const next = nextTags.length > 0 ? `${base}/${nextTags.join('/')}` : base
      router.push(next)
    },
    [selectedTags, router]
  )

  const [sort, setSort] = useState<'latest' | 'oldest' | 'az' | 'za' | 'views'>('latest')

  return (
    <div className="flex flex-wrap justify-between items-start md:items-center gap-4 mb-6">
      <div className="flex flex-wrap gap-2 max-w-[75%]">
        <span
          className={`px-3 py-1 rounded-full border cursor-pointer transition-all font-semibold text-green-900 ${
            selectedTags.length === 0 ? 'border-pink-600 text-pink-600 font-bold' : 'border-green-300'
          }`}
          onClick={() => router.push('/knowledge')}
        >
          All Categories
        </span>

        {tags.map((tag, i) => {
          const tagForUrl = tag.replace(/\s+/g, '-')
          const isSelected = selectedTags.includes(tagForUrl)
          return (
            <span
              key={i}
              onClick={() => toggleTag(tagForUrl)}
              className={`group relative flex items-center gap-2 px-4 py-1.5 rounded-full border cursor-pointer transition-all font-semibold ${
                isSelected
                  ? 'border-pink-600 text-pink-600 font-bold'
                  : 'border-green-300 text-green-900 hover:border-pink-600 hover:text-pink-600'
              }`}
            >
              {isSelected && (
                <span className="w-3 h-3 rotate-180 group-hover:scale-110 transition-transform text-pink-600">×</span>
              )}
              {tag}
            </span>
          )
        })}
      </div>

      <SortDropdown sort={sort} setSort={setSort} />
    </div>
  )
}
