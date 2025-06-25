import { client } from '../sanity/lib/client'

export async function getArticles() {
  return await client.fetch(`*[_type == "article"] | order(publishedAt desc)[0...12]{
    _id,
    slug,
    title,
    description,
    tags,
    publishedAt,
    "thumbRef": thumbImage.asset._ref
  }`)
}

export async function getArticlesByTag(tag: string) {
  return await client.fetch(
    `*[_type == "article" && $tag in tags][] | order(publishedAt desc)[0...12]{
      _id,
      slug,
      title,
      description,
      tags,
      publishedAt,
      "thumbRef": thumbImage.asset._ref
    }`,
    { tag } as Record<string, any>
  )
}
