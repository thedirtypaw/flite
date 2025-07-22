// components/fliteProtein/ProductHero.tsx
import * as React from "react";

export interface ProductHeroProps {
  mainImage: string;
  mainImageAlt: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  mainImage,
  mainImageAlt,
}) => {
  return (
    <div className="flex justify-center items-center w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <img
        loading="lazy"
        src={mainImage}
        alt={mainImageAlt}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default ProductHero;
