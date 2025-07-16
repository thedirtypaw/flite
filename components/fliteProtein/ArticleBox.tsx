'use client'

import Link from 'next/link'
import { urlFor } from '../../sanity/lib/image'
import { useRouter } from 'next/navigation'

type Props = {
  href: string
  title: string
  thumb: string | null
  tags?: string[]
  publishedAt: string
  body?: any
  className?: string
  views: number
}



export default function ArticleBox({
  href,
  title,
  thumb,
  tags,
  publishedAt,
  className = '',
}: Props) {
  
  const router = useRouter()
  
  return (
    <Link
      href={href}
      className={`bg-[#f6ebd4] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${className}`}
    >
      {thumb && (
        <img
          src={urlFor({ _ref: thumb }).format('webp').url()}
          alt={title}
          loading="lazy" 
          className="w-full h-48 object-cover rounded-t-xl"
        />
      )}

      <div className="p-4">
        <h3 className="text-[#a23865] text-lg font-bold mb-1 group-hover:text-[#8a2d54] transition-colors">{title}</h3>

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#e39ba5] uppercase mb-1">
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        )}

        <p className="text-xs text-muted-foreground">
          {new Date(publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
      </div>
    </Link>
  )
}
