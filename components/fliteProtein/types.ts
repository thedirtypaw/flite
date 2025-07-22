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
  subheading: string | React.ReactNode;
}

export interface HeroImageProps {
  mainImage: string;
  mainImageAlt: string;
}

export interface TwoColumnProps {
  title: string;
  column1Text: string | React.ReactNode;
  column1Button: React.ReactNode;
  column2Text: string | React.ReactNode;
  column2Button: React.ReactNode;
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
  thumb?: string
  mainImage?: any
  body?: any
}