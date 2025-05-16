import { client } from '../sanity/lib/client'

export async function getArticle(slug: string) {
  return await client.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      publishedAt,
      mainImage,
      body
    }`,
    { slug }
  )
}
