import * as React from "react";
import { HeroText } from "./HeroText";
import { HeroImage } from "./HeroImage";
import { TwoColumns } from "./TwoColumns";
import  ArticleBox  from "./ArticleBox";
import { getLimitedArticles } from "../../lib/articles";
import { urlFor } from '../../lib/imageURL'



export async function getServerSideProps() {
  const articles = await getLimitedArticles();
  return { props: { articles } };
}


const navItems = [
  { label: "Landing", width: "54px", isActive: true },
  { label: "Account", width: "57px" },
  { label: "Work", width: "35px" },
  { label: "Blog", width: "30px" },
  { label: "Docs", width: "35px" },
];

export const FliteProtein: React.FC<{ articles: any[] }> = ({ articles }) => {

  
  return (
    // asta e body
    <div className="flex w-full overflow-hidden flex-col  bg-[#f8f8f1]">
    {/*Container navbar */}
      <div className="flex flex-wrap gap-10 justify-between items-center py-5 pr-10 pl-5 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-2.5 justify-center items-start self-stretch py-2.5 my-auto min-h-[61px] w-[130px]">
          <div className="flex justify-between items-start py-0.5 pr-3 pl-3 min-h-[44px] w-[130px]">
            <div className="flex gap-3 items-center h-10 w-[107px]">
              <img
                loading="lazy"
                src="/logo.png"
                alt="Flite Protein Logo"
                className="object-contain self-stretch my-auto aspect-[2.61] w-[107px]"
              />
            </div>
          </div>
        </div>
        
      </div>
     {/*Container de text si poza */}
     <div className="flex flex-wrap justify-center items-center px-[5%] w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
  
          <HeroText
            title="Flite Protein"
            heading="Creating the best vegan protein powder in a biodiverse setting"
            subheading="Cras porta, ante vel ullamcorper mollis, est libero eleifend orci, et posuere nisl arcu sodales mi."
          />
        
          <HeroImage
            mainImage="/grafica_bonsai.png"
            mainImageAlt="Protein powder background" 
            />
         
        
      
      </div>
      
      <div className=" flex flex-wrap justify-center px-[5%] w-[90%] mx-auto">
        <TwoColumns
        title="What we're doing"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pretium sem. Phasellus in dapibus neque. Donec vel turpis augue. Sed sed magna tellus. Donec eu orci turpis. Donec nibh felis, malesuada non massa vel, vestibulum vehicula tortor. Curabitur condimentum purus sed lacus malesuada pellentesque. Quisque et metus ut magna porta porttitor eget volutpat sem. Aliquam ultricies odio mi. Vivamus bibendum dolor eu turpis tempor, sagittis luctus lacus ornare. Sed fringilla lorem ac magna euismod egestas. Pellentesque nibh tellus, maximus sit amet accumsan sed, vehicula fringilla felis. In sed magna vitae tellus blandit porttitor. Sed metus ipsum, egestas et ipsum sed, ultricies venenatis sem. Integer congue neque eget dolor ullamcorper, et lacinia nulla porta."
        />
      </div>

      <div className=" flex flex-wrap justify-stretch px-[5%] w-[90%] mx-auto">
          {articles.map((article) => (
              <ArticleBox
              key={article._id}
              href={`/blog/${article.slug}`}
              description={article.excerpt}
              thumb={urlFor(article.thumbImage).format('webp').url()}
              tags={article.tags}
              title={article.title}
              body={article.body}
            />
            ))}

      </div>
    </div>
  );
};

export default FliteProtein;
