import { NextRequest, NextResponse } from 'next/server'
import { client, writeClient } from '../../../../sanity/lib/client'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params

    if (!slug) {
      return NextResponse.json({ message: 'Slug not found' }, { status: 400 })
    }

    console.log('Recording view for slug:', slug) // Debug log

    const query = `*[_type == "article" && slug.current == $slug][0]._id`
    const articleId = await client.fetch(query, { slug })

    if (!articleId) {
      console.log('Article not found for slug:', slug) // Debug log
      return NextResponse.json({ message: 'Article not found' }, { status: 404 })
    }

    console.log('Updating views for article ID:', articleId) // Debug log

    // Use writeClient for the patch operation
    await writeClient
      .patch(articleId)
      .setIfMissing({ views: 0 })
      .inc({ views: 1 })
      .commit()

    console.log('View recorded successfully') // Debug log
    return NextResponse.json({ message: 'View recorded' }, { status: 200 })
  } catch (error) {
    console.error('Error recording view:', error)
    return NextResponse.json({ message: 'Error recording view' }, { status: 500 })
  }
}
