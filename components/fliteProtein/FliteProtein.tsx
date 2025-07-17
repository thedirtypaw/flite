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

      <div className="flex flex-wrap justify-between mt-24 items-center content-padding w-full max-md:py-24 max-md:max-w-full">
        <HeroText
          title="Flite Protein"
          heading="Creating the best vegan protein powder in a biodiverse setting"
          subheading={
            <>
              For health-conscious consumers focused on prevention, gut health, sustainable and active living.<br /><br />
              We make innovative three-way processed, germinated-hydrolysed-fermented, protein isolate, starch and fibre with health-promoting benefits.<br /><br />
              From organic yellow peas grown at biodiversity-positive farms. Processed at-farm in containers.
            </>
          }
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
          column1Text="This isn't just another protein powder - it's the magic of our triple-processing method. Germination awakens dormant peas, increasing bioavailability and creating natural enzymes. Hydrolysis breaks proteins into easily digestible peptides your body absorbs instantly."
          column1Button={
            <a
              href="/download1"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Download #1
            </a>
          }
          column2Text="Fermentation adds beneficial probiotics while creating bioactive compounds that support gut health and immune function. The result is a protein powder that nourishes your entire system with the concentrated power of what peas were always meant to become."
          column2Button={
            <a
              href="/download2"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Download #2
            </a>
          }
        />
      </div>

      {/* Download buttons */}
      <div className="flex flex-wrap justify-between content-padding w-full mx-auto mt-4">
        <div className="columns-2 gap-12 w-full ">
          <a
            href="/path-to-pea-protein-sheet.pdf"
            download
            className="flex items-center gap-2 text-[#e3176e] hover:underline body-text mb-4 break-inside-avoid"
          >
            <img
              src="/download.svg"
              alt="Download"
              className="w-8 h-8 flex-shrink-0"
            />
            Download Product Sheet for Pea Protein Powder
          </a>

          <a
            href="/path-to-pea-fiber-sheet.pdf"
            download
            className="flex items-center gap-2 text-[#e3176e] hover:underline body-text mb-4 break-inside-avoid"
          >
            <img
              src="/download.svg"
              alt="Download"
              className="w-8 h-8 flex-shrink-0"
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
        <p className="text-center mb-8 ">
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

      {/* Nutrition & Bio 2.0 Tags Section */}
      <div className="mt-16 content-padding w-full mx-auto">
        <GlobalH2>
          Check out other articles about nutrition & bio 2.0
        </GlobalH2>

        <div className="flex flex-wrap mt-8 justify-center gap-6">
          {[
            { name: 'protein', url: '/knowledge/protein' },
            { name: 'new research', url: '/knowledge/new-research' },
            { name: 'biodiversity', url: '/knowledge/biodiversity' },
            { name: 'agriculture', url: '/knowledge/agriculture' },
            { name: 'everyday cooking', url: '/knowledge/everyday-cooking' }
          ].map((tag) => (
            <a
              key={tag.name}
              href={tag.url}
              className="px-8 py-3 text-lg rounded-full border-2 border-green-300 text-green-900 hover:border-pink-600 hover:text-pink-600 cursor-pointer transition-all font-semibold"
            >
              {tag.name}
            </a>
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

