// app/products/page.tsx
import * as React from 'react'
import { Metadata } from 'next'
import ProductHero from '../../components/fliteProtein/ProductHero'
import { TwoColumns } from '../../components/fliteProtein/TwoColumns'
import CTAButton from '../../components/fliteProtein/CTAbutton'
import { GlobalH2 } from '../../components/fliteProtein/fonts'

// app/products/page.tsx
export const metadata: Metadata = {
  title: 'Products - Flite | Organic Germinated Fermented Hydrolyzed Protein',
  description: 'Discover our innovative triple-processed vegan protein powder and fiber products. Custom B2B solutions for health-conscious brands.',
  keywords: ['vegan protein', 'B2B protein solutions', 'custom protein powder', 'pea protein', 'functional ingredients'],
  openGraph: {
    title: 'Products - Flite | Triple-Processed Vegan Protein Solutions',
    description: 'Discover our innovative triple-processed vegan protein powder and fiber products.',
    url: 'https://flite.ro/products',
    images: [
      {
        url: 'https://flite.ro/og-products.webp',
        width: 1200,
        height: 627,
        alt: 'Flite Protein Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products - Flite | Triple-Processed Vegan Protein Solutions',
    description: 'Discover our innovative triple-processed vegan protein powder and fiber products.',
    images: ['https://flite.ro/og-products.webp'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Flite Triple-Processed Vegan Protein',
  description: 'Innovative triple-processed vegan protein powder made from organic yellow peas.',
  brand: {
    '@type': 'Brand',
    name: 'Flite'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Flite',
    url: 'https://flite.ro'
  }
}

export default function ProductsPage() {
  return (
    <div className="flex w-full overflow-hidden content-padding flex-col">

      {/* Hero Image Section */}
      <ProductHero
        mainImage="/product_range.png"
        mainImageAlt="Flite Protein Products"
      />

      {/* What We Can Do For You Section - Convert to TwoColumns */}
      <div className="flex flex-wrap justify-center content-padding w-full mx-auto mb-16">
        <TwoColumns
          title="What We Can Do For You"
          column1Text={<p>
            Transform your product line with our innovative approach to functional ingredients. We specialize in creating premium, health-focused products that resonate with today's conscious consumers.
            <br /><br />
            From sleek, minimalist packaging that appeals to urban professionals to bold, vibrant designs that capture the attention of fitness enthusiasts, we work with you to create products that not only perform exceptionally but also look stunning on the shelf.
          </p>}
          column1Button={null}
          column2Text={<p>
            Our smaller, more targeted product formats allow for premium positioning and higher margins while meeting the specific needs of niche markets. Whether you're looking to launch a new brand, expand an existing product line, or create private label solutions, our team brings together cutting-edge food science, sustainable sourcing, and market-driven design to deliver products that exceed expectations and drive growth.
          </p>}
          column2Button={null}
        />
      </div>

      {/* Product Range Image Section */}
      <div className="flex flex-col items-center content-padding w-full mx-auto my-16">
        <img
          src="/product_range.png"
          alt="Future product range prototypes"
          className="w-full max-w-4xl h-auto object-contain mb-6"
        />
        <p className="text-center mb-8">
          These images are examples and prototypes for development of your future products
        </p>
      </div>


      {/* Biome Health Two-Column Section */}
      <div className="flex flex-wrap justify-center content-padding w-full mx-auto mt-16">
        <TwoColumns
          title="The Importance of Biome Health"
          column1Text="Your gut microbiome is the foundation of your health, housing trillions of beneficial bacteria that influence everything from digestion and immunity to mood and cognitive function. A healthy biome enhances nutrient absorption, produces essential vitamins, and maintains the delicate balance that keeps your body functioning optimally. When your microbiome thrives, you experience better energy levels, improved mental clarity, stronger immune responses, and enhanced overall well-being."
          column2Text="Our triple-processed protein powder doesn't just feed your muscles – it nourishes your entire microbiome ecosystem. The fermentation process introduces beneficial probiotics while creating bioactive compounds that support gut health. The germination and hydrolysis steps increase bioavailability, ensuring your body can efficiently utilize every nutrient. This comprehensive approach transforms simple pea protein into a functional food that actively contributes to your daily health, supporting not just your fitness goals but your long-term wellness journey."
          column1Button={null}
          column2Button={null}
        />
      </div>


      {/* Product Sheets Two-Column Section */}
      <div className="flex flex-wrap justify-center content-padding w-full mx-auto">
        <TwoColumns
          title="Our Product Range"
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

      {/* Second Product Range Image Section */}
      <div className="flex flex-col items-center content-padding w-full mx-auto my-16">
        <img
          src="/product_range.png"
          alt="Future product range prototypes"
          className="w-full max-w-4xl h-auto object-contain mb-6"
        />
        <p className="text-center mb-8">
          These images are examples and prototypes for development of your future products
        </p>
      </div>

      {/* B2B Prototypes Paragraph */}
      <div className="flex flex-col items-center content-padding w-full mx-auto mb-16">
        <div className="max-w-4xl text-center">
          <p className="text-lg leading-relaxed">
            These are our prototypes and we're ready to customize and tailor them for your client's needs.
            Our flexible manufacturing approach allows us to adapt our triple-processing method to create
            unique formulations that align with your brand vision and target market requirements.
            Whether you need specific protein concentrations, custom flavor profiles, or specialized
            packaging solutions, we work closely with you to develop products that stand out in the marketplace.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10 content-padding">
        <CTAButton text="Get in Touch" href="http://eepurl.com/i-ryhA" />
      </div>
    </div>
  )
}
