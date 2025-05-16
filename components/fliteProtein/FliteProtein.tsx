import * as React from "react";

import { HeroText } from "./HeroText";
import { HeroImage } from "./HeroImage";
import { TwoColumns } from "./TwoColumns";
import { ArticleBox } from "./ArticleBox";
import { getLimitedArticles } from "../../lib/articles";
import  CTAButton  from "./CTAbutton";
import { urlFor } from "../../lib/imageURL"

export async function getStaticProps() {
  const articles = getLimitedArticles();
  return { props: { articles } };
}

export default async function FliteProtein() {
  const articles = await getLimitedArticles(100);
  console.log("🧪 FliteProtein loaded");

  return (
    // asta e body
    <div className="flex w-full overflow-hidden flex-col  bg-[#f8f8f1]">

    
     
    {/*Container de text si poza */}
     <div className="flex flex-wrap justify-center items-center px-[5%] w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
  
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
    
    {/*Container de text pe doua coloane */} 
      <div className=" flex flex-wrap justify-center px-[5%] w-[90%] mx-auto">
        <TwoColumns
        title="What we're doing"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pretium sem. Phasellus in dapibus neque. Donec vel turpis augue. Sed sed magna tellus. Donec eu orci turpis. Donec nibh felis, malesuada non massa vel, vestibulum vehicula tortor. Curabitur condimentum purus sed lacus malesuada pellentesque. Quisque et metus ut magna porta porttitor eget volutpat sem. Aliquam ultricies odio mi. Vivamus bibendum dolor eu turpis tempor, sagittis luctus lacus ornare. Sed fringilla lorem ac magna euismod egestas. Pellentesque nibh tellus, maximus sit amet accumsan sed, vehicula fringilla felis. In sed magna vitae tellus blandit porttitor. Sed metus ipsum, egestas et ipsum sed, ultricies venenatis sem. Integer congue neque eget dolor ullamcorper, et lacinia nulla porta."
        />
      </div>
    
    {/*Container de 4 articole */}
      <div className=" flex flex-wrap justify-stretch px-[5%] w-[90%] mx-auto">
         {articles.map((article) => 
        <ArticleBox 
          key={article._id}
          href={`/blog/${article.slug}`}
          description={article.description}
          thumb={article.thumbImage}
          tags={article.tags}
          title={article.title}
          />
         )}
      </div>

     {/* Call the CTA Button Component */}
        <div className="flex justify-center mt-10">
             <CTAButton text="GET STARTED" href="http://eepurl.com/i-ryhA" />
        </div>

     {/* Footer */}
     

    </div>
  );
};
