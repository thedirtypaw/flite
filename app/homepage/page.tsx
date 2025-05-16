import FliteProtein from '../../components/fliteProtein/FliteProtein'
import SeoHead from '../../components/SeoHead'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flite',
  description: 'Real Food For Real Gut Health.',
  openGraph: {
    title: 'Flite',
    description: 'Real Food For Real Gut Health.',
    url: 'https://flite.ro',
    images: [
      {
        url: 'https://flite.ro/og-home.webp',
        width: 1200,
        height: 627,
        alt: 'Flite',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flite',
    description: 'Real Food For Real Gut Health.',
    images: ['https://flite.ro/og-home.webp'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Flite',
  url: 'https://flite.ro',
  logo: 'https://flite.ro/logo.png',
  sameAs: [
    'https://www.instagram.com/flite.ro/',
    'https://www.facebook.com/flite.ro/',
  ],
}

export default async function HomePage() {
  const flite = await FliteProtein()

  return (
    <>
      <SeoHead
        title={metadata.title as string}
        description={metadata.description as string}
        image="https://flite.ro/og-home.webp"
        url="https://flite.ro"
      />

      <main className="min-h-screen flex flex-col">
        <section className="flex-grow flex flex-col justify-start">
          {flite}
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
