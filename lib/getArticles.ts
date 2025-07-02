import { client } from '../sanity/lib/client'

export async function getAllTags(): Promise<string[]> {
  const articles = await client.fetch(`*[_type == "article"]{ tags }`)
  const tags = articles.flatMap((a: any) =>
    Array.isArray(a.tags) ? a.tags : []
  )
  return Array.from(new Set(tags))
}

export async function getArticles() {
  return await client.fetch(`*[_type == "article"] | order(publishedAt desc)[0...12]{
    _id,
    slug,
    title,
    description,
    tags,
    publishedAt,
    views,
    "thumb": thumbImage.asset._ref
  }`)
}

export async function searchArticles(query: string, tags: string[] = []) {
  const tagFilter = tags.length > 0 
    ? tags.map(tag => `"${tag}" in tags`).join(' && ') + ' && '
    : ''
  
  // Enhanced search: title, description, AND tags
  const searchFilter = `(title match "*${query}*" || description match "*${query}*" || tags match "*${query}*")`
  
  return client.fetch(
    `*[_type == "article" && ${tagFilter}${searchFilter}] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      views,
      tags,
      "thumb": thumbImage.asset._ref
    }`
  )
}

export async function getArticlesByTag(tags: string[]) {
  const tagFilters = tags.map(tag => `"${tag}" in tags`).join(' && ')
  
  return client.fetch(
    `*[_type == "article" && ${tagFilters}] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      views,
      tags,
      "thumb": thumbImage.asset._ref
    }`
  )
}
