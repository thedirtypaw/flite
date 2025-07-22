import * as React from 'react'

import { HeroText } from './HeroText'
import { HeroImage } from './HeroImage'
import { TwoColumns } from './TwoColumns'
import ArticleBox from './ArticleBox'
import CTAButton from './CTAbutton'
import { getLimitedArticles } from '../../lib/articles'
import { GlobalH2 } from './fonts';

export default async function FliteProtein() {
  const allArticles = await getLimitedArticles(100)
  const articles = allArticles.slice(0, 4)

  return (
    <div className="flex w-full overflow-hidden content-padding flex-col ">
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
          column1Text="This isn't just another protein powder - it's the magic of our triple-processing method. Germination awakens dormant peas, increasing bioavailability and creating natural enzymes. Hydrolysis breaks proteins into easily digestible peptides your body absorbs instantly. Fermentation adds beneficial probiotics while creating bioactive compounds that support gut health and immune function. The result is a protein powder that nourishes your entire system with the concentrated power of what peas were always meant to become."
          column1Button={
            <a
              href="/pea_powder_sheet.pdf"
              download
              className="flex items-center gap-2 text-[#e3176e] hover:underline body-text"
            >
              <img
                src="/download.svg"
                alt="Download"
                className="w-8 h-8 flex-shrink-0"
                style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(95%) saturate(7151%) hue-rotate(320deg) brightness(95%) contrast(95%)' }}
              />
              Download Product Sheet for Pea Protein Powder
            </a>
          }
          column2Text="Our germinated and fermented pea fiber represents a new approach to functional fiber ingredients. The dual-processing method transforms natural pea fiber components through germination, which activates and modifies the fiber structure, followed by fermentation that further develops the material. This creates a fiber ingredient with enhanced functional properties compared to conventional pea fiber, offering improved performance characteristics while maintaining the natural benefits of plant-based fiber."
          column2Button={
            <a
              href="/path-to-pea-fiber-sheet.pdf"
              download
              className="flex items-center gap-2 text-[#e3176e] hover:underline body-text"
            >
              <img
                src="/download.svg"
                alt="Download"
                className="w-8 h-8 flex-shrink-0"
                style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(95%) saturate(7151%) hue-rotate(320deg) brightness(95%) contrast(95%)' }}
              />
              Download Product Sheet for Pea Fiber
            </a>
          }
        />

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
          column1Text="The food system is broken and needs fundamental change. Industrial agriculture drives 25% of global emissions while destroying biodiversity, with animal husbandry alone accounting for 15% of global emissions. Meanwhile, consumers are demanding better – they want sustainable, nutrient-dense food with short ingredient lists, clear labeling, and a genuine connection to where their food comes from. Conventional protein isolates, whether plant-based or animal, fall short with poor bioavailability, digestibility issues, and often contain allergens, trace chemicals, and synthetic additives that consumers increasingly reject."
          column2Text="The current system locks incumbents into centralized production and fragile supply chains while making it difficult for farmers to transition to biodiversity-positive farming. Farmers want technical and financial support to shift to profitable regenerative practices, but EU policy ambitions for sustainable agriculture are slow to implement, and market mechanisms like biodiversity credits remain in their infancy. Our approach bridges this gap by creating a direct pathway for farmers to participate in food innovation while producing ingredients that meet the growing demand for traceable, local, and truly sustainable nutrition."
          column1Button
          column2Button
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

