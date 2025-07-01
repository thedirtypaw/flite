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
  href: string;
  body: any;
}

export type NavItemProps = {
  label: string
  isActive: boolean
  width: number
}

export type Article = {
  _id: string
  slug: { current: string }
  title: string
  tags: string[]
  publishedAt: string
  views?: number
  description?: string
  thumbRef?: string
  mainImage?: any
  body?: any
}