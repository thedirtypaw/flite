// app/api/search-suggestions/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { client } from '../../../sanity/lib/client'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  
  if (!query || query.length < 3) {
    return NextResponse.json({ articles: [], tags: [] })
  }

  try {
    // Search articles
    const articles = await client.fetch(
      `*[_type == "article" && (title match "*${query}*" || description match "*${query}*")] | order(publishedAt desc)[0...5]{
        _id,
        title,
        slug,
        tags
      }`
    )

    // Search tags
    const allTags = await client.fetch(
      `*[_type == "article" && defined(tags)] | order(publishedAt desc){
        tags
      }`
    )
    
    // Fix: Properly type and filter the tags
    const uniqueTags = [...new Set(
      allTags
        .flatMap((article: any) => article.tags || [])
        .filter((tag: any): tag is string => typeof tag === 'string')
    )]
    
    const matchingTags = uniqueTags
      .filter((tag: string) => tag.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5)

    return NextResponse.json({
      articles: articles || [],
      tags: matchingTags || []
    })
  } catch (error) {
    console.error('Search suggestions error:', error)
    return NextResponse.json({ articles: [], tags: [] })
  }
}
