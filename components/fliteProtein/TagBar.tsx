// components/fliteProtein/TagBar.tsx

'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function TagBar({ tags }: { tags: string[] }) {
  const searchParams = useSearchParams()
  const currentTag = searchParams.get('tag') || ''

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/knowledge"
        className={`px-3 py-1 rounded-full border text-sm ${
          currentTag === ''
            ? 'font-bold underline text-pink-600 border-pink-600'
            : 'bg-white text-green-800 border-green-300 hover:border-green-600'
        }`}
      >
        All categories
      </Link>

      {tags.map((tag) => {
        const isActive = currentTag === tag
        return (
          <Link
            key={tag}
            href={`/knowledge?tag=${encodeURIComponent(tag)}`}
            className={`px-3 py-1 rounded-full border text-sm ${
              isActive
                ? 'font-bold underline text-pink-600 border-pink-600'
                : 'bg-white text-green-800 border-green-300 hover:border-green-600'
            }`}
          >
            {tag}
          </Link>
        )
      })}
    </div>
  )
}
