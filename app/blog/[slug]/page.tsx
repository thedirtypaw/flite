import { notFound } from 'next/navigation'
import { client } from '../../../lib/sanityClient'
import SeoHead from '../../../components/SeoHead'
import {Article} from '../../../components/fliteProtein/Article'
import type { JSX } from 'react'

export default async function Page({
  params
}: {
  params: { slug: string }
}): Promise<JSX.Element> {
  const query = `*[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    description,
    slug,
    publishedAt,
    _updatedAt,
    articleType,
    tags,
    mainImage{
      asset->{url}
    },
    body
  }`

  const article = await client.fetch(query, { slug: params.slug })

  if (!article) return notFound()

  return (
    <>
      <SeoHead
        title={article.title}
        description={article.description}
        keywords={article.tags?.join(', ')}
        url={`https://flite.ro/article/${article.slug.current}`}
        image={article.mainImage?.asset?.url}
        article={article}
      />
      <main className="min-h-screen flex flex-col">
        <Article
          title={article.title}
          tags={article.tags}
          thumb={article.mainImage?.asset?.url}
          body={article.body}
          description={article.description}
          href={`/article/${article.slug.current}`}
        />
      </main>
    </>
  )
}
