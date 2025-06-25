'use client'

import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'

export function TagBar({
  uniqueTags,
  sortingOptions,
}: {
  uniqueTags: string[]
  sortingOptions: string[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center gap-3 px-[5%] py-4 overflow-x-visible whitespace-nowrap relative">
      <span className="text-sm text-[#949494] font-semibold mr-2">
        Popular Tags:
      </span>
      {uniqueTags.map((tag: string, index: number) => (
        <a
          key={`tag-${index}`}
          href={`/knowledge?tag=${encodeURIComponent(tag)}`}
          className="text-base text-[#949494] hover:text-[#f771aa] transition-colors cursor-pointer"
        >
          {tag}
        </a>
      ))}

      <button
        title="Sort tags"
        onClick={() => setOpen(!open)}
        className="ml-auto text-[#949494] hover:text-[#f771aa] transition-colors cursor-pointer"
      >
        <SlidersHorizontal className="w-8 h-8" />
      </button>
      {open && (
        <div className="absolute right-5 top-full mt-2 bg-white border border-gray-200 rounded shadow-md z-50 w-48">
          {sortingOptions.map((option, idx) => (
            <div
              key={`sort-${idx}`}
              className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
