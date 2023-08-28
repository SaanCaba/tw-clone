import { Supabase } from '@/supabase/Supabase'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const offset: string | null = url.searchParams.get('offset')
  const pageCount: string | null = url.searchParams.get('pageCount')
  const supabase = new Supabase()
  console.log(offset, pageCount)
  const posts = await supabase.fetchMorePosts(Number(offset), Number(pageCount))
  return NextResponse.json({ posts })
}
