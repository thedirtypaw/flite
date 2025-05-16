import { urlFor } from '../../../sanity/lib/image'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import { getArticle } from '../../../lib/getArticle'
import { Metadata } from 'next'
import { generateJsonLd } from '../../../components/generateJsonLd'



type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      images: [urlFor(article.mainImage).width(1200).height(627).url()],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
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
              dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd(article)) }}
            />

    </article>
  )
}
