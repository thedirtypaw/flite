import * as React from 'react'

import { HeroText } from './HeroText'
import { HeroImage } from './HeroImage'
import { TwoColumns } from './TwoColumns'
import ArticleBox from './ArticleBox'
import CTAButton from './CTAbutton'
import { getLimitedArticles } from '../../lib/articles'
import SeoHead from '../../components/SeoHead'

export default async function FliteProtein() {
  const allArticles = await getLimitedArticles(100)
  const articles = allArticles.slice(0, 4)

  return (
    <div className="flex w-full overflow-hidden content-padding flex-col bg-[#f8f8f1]">
      <SeoHead
        title="Flite Protein"
        description="Creating the best vegan protein powder in a biodiverse setting"
        image="https://flite.ro/og-home.webp"
        url="https://flite.ro"
      />

      {/* Text + image section */}
      <div className="content-padding">
        <div className="flex flex-wrap justify-between items-center content-padding w-full max-md:py-24 max-md:max-w-full">
          <HeroText
            title="Flite Protein"
            heading="Creating the best vegan protein powder in a biodiverse setting"
            subheading="Cras porta, ante vel ullamcorper mollis, est libero eleifend orci, et posuere nisl arcu sodales mi."
          />
          <HeroImage
            mainImage="/grafica_pisica.png"
            mainImageAlt="Protein powder background"
          />
        </div>

        {/* Two-column paragraph block */}
        <div className="flex flex-wrap justify-center content-padding w-full mx-auto">
          <TwoColumns
            title="What we're doing"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pretium sem. Phasellus in dapibus neque. Donec vel turpis augue. Sed sed magna tellus. Donec eu orci turpis. Donec nibh felis, malesuada non massa vel, vestibulum vehicula tortor. Curabitur condimentum purus sed lacus malesuada pellentesque. Quisque et metus ut magna porta porttitor eget volutpat sem. Aliquam ultricies odio mi. Vivamus bibendum dolor eu turpis tempor, sagittis luctus lacus ornare. Sed fringilla lorem ac magna euismod egestas. Pellentesque nibh tellus, maximus sit amet accumsan sed, vehicula fringilla felis. In sed magna vitae tellus blandit porttitor. Sed metus ipsum, egestas et ipsum sed, ultricies venenatis sem. Integer congue neque eget dolor ullamcorper, et lacinia nulla porta."
          />
          <TwoColumns
            title="Why we're doing it"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pretium sem. Phasellus in dapibus neque. Donec vel turpis augue. Sed sed magna tellus. Donec eu orci turpis. Donec nibh felis, malesuada non massa vel, vestibulum vehicula tortor. Curabitur condimentum purus sed lacus malesuada pellentesque. Quisque et metus ut magna porta porttitor eget volutpat sem. Aliquam ultricies odio mi. Vivamus bibendum dolor eu turpis tempor, sagittis luctus lacus ornare. Sed fringilla lorem ac magna euismod egestas. Pellentesque nibh tellus, maximus sit amet accumsan sed, vehicula fringilla felis. In sed magna vitae tellus blandit porttitor. Sed metus ipsum, egestas et ipsum sed, ultricies venenatis sem. Integer congue neque eget dolor ullamcorper, et lacinia nulla porta."
          />
        </div>

        {/* Article preview blocks */}
        <div className="flex flex-wrap justify-center content-padding w-full mx-auto">
          {articles.map((article) => (
            <ArticleBox
              key={article._id}
              href={`/article/${article.slug.current}`}
              thumb={article.thumbRef}
              tags={article.tags}
              title={article.title}
              body={article.body}
              publishedAt={article.publishedAt}
              views={article.views || 0}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10 content-padding">
          <CTAButton text="GET STARTED" href="http://eepurl.com/i-ryhA" />
        </div>
      </div>
    </div>
  )
}

