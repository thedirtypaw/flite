import { client as sanityClient } from './sanityClient';
import { groq } from 'next-sanity';

export const getLimitedArticles = async (limit) => {
  const query = groq`*[_type == "article"] | order(publishedAt desc)[0...$limit]{
    _id,
    title,
    excerpt,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    },
    publishedAt
  }`;

  const articles = await sanityClient.fetch(query, { limit });
  return articles;
};
