export interface HeaderProps {
  label: string;
  isActive?: boolean;
  href: string;
}

export interface FooterProps {
  label: string;
  isActive?: boolean;
  href: string;
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
  thumb: string;
  title: string;
  tags: string[];
  description: string;
}