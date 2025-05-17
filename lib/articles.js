import { client } from '../sanity/lib/client'

export async function getLimitedArticles(limit = 100) {
  const query = `*[_type == "article"] | order(publishedAt desc)[0...$limit]{
    _id,
    slug,
    title,
    description,
    tags,
    publishedAt,
    "thumbRef": thumbImage.asset._ref
  }`
  const params = { limit }
  return client.fetch(query, params)
}