import Link from 'next/link'
import { urlFor } from '../../sanity/lib/image'

type Props = {
  href: string
  title: string
  description: string
  thumb: string | null
  tags?: string[]
  body?: any
}

export default function ArticleBox({ href, title, description, thumb, tags }: Props) {
  return (
    <Link
      href={href}
      className="bg-[#defade] border border-[#c2f0b1] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group w-full md:w-[48%] lg:w-[31%] m-2"
    >
      {thumb && (
        <img
          src={urlFor({ _ref: thumb }).format('webp').url()}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
      )}
      <div className="p-4">
        <div className="text-xs font-medium text-green-700 uppercase mb-1">
          {Array.isArray(tags) ? tags.join(', ') : ''}
        </div>
        <h3 className="text-lg font-bold mb-1 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
      </div>
    </Link>
  )
}
