import { urlFor } from '../../../sanity/lib/image'
import { getArticle } from '../../../lib/getArticle'
import { generateJsonLd } from '../../../components/generateJsonLd'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ClientArticle from './ClientArticle'

type PageProps = any

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const article = await getArticle(params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      images: [urlFor(article.mainImage).width(1200).height(627).url()],
    },
  }
}

export default async function ArticlePage({ params }: any) {
  const article = await getArticle(params.slug)
  if (!article) return notFound()

  const jsonLd = generateJsonLd(article)

  return <ClientArticle article={article} jsonLd={jsonLd} />
}
