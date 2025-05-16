import KnowledgePage from '../../components/fliteProtein/KnowledgePage'
import SeoHead from '../../components/SeoHead'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Knowledge Base – Flite',
  description: 'Science-backed articles for gut health. Dive into research, insights, and practical guidance.',
  openGraph: {
    title: 'Knowledge Base – Flite',
    description: 'Science-backed articles for gut health. Dive into research, insights, and practical guidance.',
    url: 'https://flite.ro/knowledge',
    images: [
      {
        url: 'https://flite.ro/og-knowledge.webp',
        width: 1200,
        height: 627,
        alt: 'Knowledge Base – Flite',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knowledge Base – Flite',
    description: 'Science-backed articles for gut health. Dive into research, insights, and practical guidance.',
    images: ['https://flite.ro/og-knowledge.webp'],
  },
}

export default async function KnowledgePageWrapper() {
  const pageContent = await KnowledgePage()

  return (
    <>
      <SeoHead
        title={metadata.title as string}
        description={metadata.description as string}
        image="https://flite.ro/og-knowledge.webp"
        url="https://flite.ro/knowledge"
      />

      <main className="min-h-screen flex flex-col">
        <section className="flex-grow flex flex-col justify-start">
          {pageContent}
        </section>
      </main>
    </>
  )
}
