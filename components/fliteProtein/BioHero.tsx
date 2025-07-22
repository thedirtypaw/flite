import * as React from "react";

interface BioHeroProps {
  mainImage: string;
  mainImageAlt: string;
}

const BioHero: React.FC<BioHeroProps> = ({
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

export default BioHero;
