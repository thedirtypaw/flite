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

export // lib/getArticles.ts - Replace the searchArticles function
async function searchArticles(query: string, tags: string[] = []) {
  const tagFilter = tags.length > 0
    ? tags.map(tag => `"${tag}" in tags`).join(' && ') + ' && '
    : ''

  // Enhanced search: title, description, tags, body, keywords, articleSection
  const searchFilter = `(
    title match "*${query}*" || 
    description match "*${query}*" || 
    count(tags[@ match "*${query}*"]) > 0 ||
    count(keywords[@ match "*${query}*"]) > 0 ||
    articleSection match "*${query}*" ||
    pt::text(body) match "*${query}*"
  )`

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
  // Handle empty tags array - return all articles
  if (tags.length === 0) {
    return client.fetch(
      `*[_type == "article"] | order(publishedAt desc){
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