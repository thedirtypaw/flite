'use client'

import { useEffect } from 'react'
import { PortableText } from '@portabletext/react'
import { urlFor } from '../../../sanity/lib/image'
import Link from 'next/link'

export default function ClientArticle({
  article,
  jsonLd,
}: {
  article: any
  jsonLd: any
}) {
  useEffect(() => {
    fetch(`/api/views/${article.slug.current}`, { method: 'POST' })
  }, [])

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">{article.title}</h1>

      {article.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 text-sm font-medium text-green-800 mb-2">
          {article.tags.map((tag: string, i: number) => (
            <Link
            key={i}
            href={`/knowledge/${tag}`}
            className="hover:underline text-green-900"
          >
            {tag}
          </Link>
          ))}
        </div>
      )}

      <p className="text-sm text-gray-500 mb-1">
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>

      <div className="text-sm text-gray-400 flex items-center gap-1 mb-6">
        <img src="/eye.svg" alt="views" className="w-4 h-4 inline-block opacity-60" />
        {article.views ?? 0} views
      </div>

      {article.mainImage && (
        <img
          src={urlFor(article.mainImage).width(900).url()}
          alt={article.title}
          className="w-full rounded-md mb-8"
        />
      )}

      <div className="prose prose-gray max-w-none">
        <PortableText value={article.body} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  )
}
