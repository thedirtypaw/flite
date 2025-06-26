import Link from 'next/link'
import { urlFor } from '../../sanity/lib/image'

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
  return (
    <Link
  href={href}
  className={`bg-[#defade] border border-[#c2f0b1] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group ${className}`}
>
      {thumb && (
        <img
          src={urlFor({ _ref: thumb }).format('webp').url()}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-bold mb-1 text-gray-900">{title}</h3>

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-green-900 uppercase mb-1">
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
