export interface NavItemProps {
  label: string;
  isActive?: boolean;
  width: string;
}

export interface HeroTextProps {
  title: string;
  heading: string;
  subheading: string;
}

export interface HeroImageProps {
  mainImage: string;
  mainImageAlt: string;
}

export interface TwoColumnProps {
  title: string;
  paragraph: string;
}

export interface ArticleProps {
  image: string;
  imageAlt: string;
  thumb: string;
  title: string;
  tags: string[];
  description: string;
}