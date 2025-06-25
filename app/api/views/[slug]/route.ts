import { NextRequest, NextResponse } from 'next/server'
import { client } from '../../../../sanity/lib/client'

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug

  // Find the article by slug
  const query = `*[_type == "article" && slug.current == $slug][0]._id`
  const articleId = await client.fetch(query, { slug })

  if (!articleId) {
    return NextResponse.json({ message: 'Article not found' }, { status: 404 })
  }

  // Patch the view count
  await client
    .patch(articleId)
    .setIfMissing({ views: 0 })
    .inc({ views: 1 })
    .commit()

  return NextResponse.json({ message: 'View recorded' }, { status: 200 })
}
