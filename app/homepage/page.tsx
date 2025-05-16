import FliteProtein from '../../components/fliteProtein/FliteProtein';
import SeoHead from '../../components/SeoHead'

export default function Homepage() {
  return (
    <>
      <SeoHead
        title="Flite — Nutritional Intelligence"
        description="Explore the future of nutrition through our research-backed insights, guides, and experiments."
        keywords="nutrition, health, supplements, fiber, hypertrophy"
        url="https://flite.ro"
        image="https://flite.ro/social-cover.jpg"
      />
      <main className="min-h-screen flex flex-col">
        <section className="flex-grow flex flex-col justify-start">
        <FliteProtein />
        </section>
      </main>
    </>
  )
}
