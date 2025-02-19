import * as React from "react";
import { ArticleProps, } from "./types";

export const Article: React.FC<ArticleProps> = ({
  image,
  imageAlt,
  thumb,
  tags,
  title,
  
  
}) => {
  return (
    <div className="flex p-4 m-5 rounded-lg bg-[#c2d8ba] relative items-center w-[45%] h-auto">
      
      <div className="flex" >
        <img loading="lazy" src={thumb} alt={imageAlt} className="object-cover relative inset-0 w-full h-full" />
      </div>
    
      <div className="flex" >
        {title}
      </div>
      
      <div className="flex" >
        {tags}
      </div>

    </div>   
   
  );
};
