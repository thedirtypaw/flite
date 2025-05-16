import React from 'react';
import { client } from '../../../lib/sanityClient';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import ShareButton from '../../../components/ShareButton';

interface Params {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: Params) {
  const query = `*[_type == "article" && slug.current == $slug][0]{
    title,
    description,
    tags,
    body,
    fullImage,
    thumbImage
  }`;

  const article = await client.fetch(query, { slug: params.slug });

  if (!article) return notFound();

  return (
    <div className="flex flex-col px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

      {article.fullImage && (
        <img
          src={`/blog/images/${article.fullImage}`}
          alt={article.title}
          className="rounded-lg mb-6 w-full max-w-4xl mx-auto"
        />
      )}

      <p className="text-gray-700 text-sm mb-2">{article.description}</p>
      <p className="text-gray-500 text-sm italic mb-6">
        {article.tags?.join(', ')}
      </p>

      <div className="prose max-w-none">
        <PortableText value={article.body} />
        <ShareButton />
      </div>
    </div>
  );
}
