import { NextRequest, NextResponse } from 'next/server'
import { client } from '../../../../sanity/lib/client'

export async function POST(
  req: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = context.params

  const query = `*[_type == "article" && slug.current == $slug][0]._id`
  const articleId = await client.fetch(query, { slug })

  if (!articleId) {
    return NextResponse.json({ message: 'Article not found' }, { status: 404 })
  }

  await client
    .patch(articleId)
    .setIfMissing({ views: 0 })
    .inc({ views: 1 })
    .commit()

  return NextResponse.json({ message: 'View recorded' }, { status: 200 })
}
