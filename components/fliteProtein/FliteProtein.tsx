import * as React from 'react'

import { HeroText } from './HeroText'
import { HeroImage } from './HeroImage'
import { TwoColumns } from './TwoColumns'
import ArticleBox from './ArticleBox'
import CTAButton from './CTAbutton'
import { getLimitedArticles } from '../../lib/articles'
import SeoHead from '../../components/SeoHead'
import { GlobalH2 } from './fonts';

export default async function FliteProtein() {
  const allArticles = await getLimitedArticles(100)
  const articles = allArticles.slice(0, 4)

  return (
    <div className="flex w-full overflow-hidden content-padding flex-col ">
      <SeoHead
        title="Flite Protein"
        description="Creating the best vegan protein powder in a biodiverse setting"
        image="https://flite.ro/og-home.webp"
        url="https://flite.ro"
      />

      {/* Text + image section */}

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
      </div>

      {/* Download buttons */}
      <div className="flex flex-wrap justify-center content-padding w-full mx-auto mt-8">
        <div className="columns-2 gap-12 w-full max-w-4xl">
          <a
            href="/path-to-pea-protein-sheet.pdf"
            download
            className="flex items-center gap-2 text-[#e3176e] hover:underline text-base mb-4 break-inside-avoid"
          >
            <img
              src="/download.svg"
              alt="Download"
              className="w-4 h-4 flex-shrink-0"
              style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(95%) saturate(7151%) hue-rotate(320deg) brightness(95%) contrast(95%)' }}
            />
            Download Product Sheet for Pea Protein Powder
          </a>

          <a
            href="/path-to-pea-fiber-sheet.pdf"
            download
            className="flex items-center gap-2 text-[#e3176e] hover:underline text-base mb-4 break-inside-avoid"
          >
            <img
              src="/download.svg"
              alt="Download"
              className="w-4 h-4 flex-shrink-0"
              style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(95%) saturate(7151%) hue-rotate(320deg) brightness(95%) contrast(95%)' }}
            />
            Download Product Sheet for Pea Fiber
          </a>
        </div>
      </div>

      {/* Product Range Section */}
      <div className="flex flex-col items-center content-padding w-full mx-auto my-16">
        <img
          src="/product_range.png"
          alt="Future product range prototypes"
          className="w-full max-w-4xl h-auto object-contain mb-6"
        />
        <p className="text-center mb-8 max-w-2xl">
          These images are examples and prototypes for development of your future products
        </p>
        <CTAButton text="Get in Touch" href="http://eepurl.com/i-ryhA" />
      </div>

      <div className="flex flex-wrap justify-center content-padding w-full mx-auto">
        <TwoColumns
          title="Why we're doing it"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pretium sem. Phasellus in dapibus neque. Donec vel turpis augue. Sed sed magna tellus. Donec eu orci turpis. Donec nibh felis, malesuada non massa vel, vestibulum vehicula tortor. Curabitur condimentum purus sed lacus malesuada pellentesque. Quisque et metus ut magna porta porttitor eget volutpat sem. Aliquam ultricies odio mi. Vivamus bibendum dolor eu turpis tempor, sagittis luctus lacus ornare. Sed fringilla lorem ac magna euismod egestas. Pellentesque nibh tellus, maximus sit amet accumsan sed, vehicula fringilla felis. In sed magna vitae tellus blandit porttitor. Sed metus ipsum, egestas et ipsum sed, ultricies venenatis sem. Integer congue neque eget dolor ullamcorper, et lacinia nulla porta."
        />
      </div>

      {/* Article preview blocks */}

      <div className="mt-12 content-padding w-full mx-auto">
        <GlobalH2>
          Here are a few examples:
        </GlobalH2>
        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10 content-padding">
        <CTAButton text="Get Started" href="http://eepurl.com/i-ryhA" />
      </div>

    </div>
  )
}

