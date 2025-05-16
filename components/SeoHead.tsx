import Head from 'next/head'
import { generateJsonLd } from './generateJsonLd'

type SeoProps = {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  article?: any
}

export default function SeoHead({
  title,
  description,
  keywords = '',
  image = '',
  url = '',
  article
}: SeoProps) {
  const jsonLd = article ? generateJsonLd(article) : null

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  )
}
