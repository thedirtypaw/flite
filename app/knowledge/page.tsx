import KnowledgePage from '../../components/fliteProtein/KnowledgePage'
import SeoHead from '../../components/SeoHead'

export default  function Knowledge() {
  return (
    <>
      <SeoHead
        title="Knowledge — Flite"
        description="Scientific breakdowns of trends, supplements, metabolic strategies, and gut health from experts."
        keywords="fiber, gut health, hypertrophy, anti-aging, creatine, metabolic health"
        url="https://flite.ro/knowledge"
        image="https://flite.ro/social-knowledge.jpg"
      />
      <main className="min-h-screen flex flex-col">
        <section className="flex-grow flex flex-col justify-start">
          <KnowledgePage />
        </section>
      </main>
    </>
  )
}
